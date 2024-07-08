import FormHelperText from "@mui/material/FormHelperText";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useHistory, useParams } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";

import axios from "axios";
import Icon from "@mui/material/Icon";
import Dialog from "@mui/material/Dialog";
import * as yup from "yup";
import _ from "@lodash";
import options from "../Utils/options";
import "../Utils/TypeAheadDropDown.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showMessage } from "app/store/fuse/messageSlice";
import { constants } from "../../../../../src/constants";


import store from "../../ID_store/store";

//the register page
//will eventually have token/user validation to swiftly go to dashboard if token is still valid

/**
 * Form Validation Schema
 */
//create validation at backend like i do for password and email
const phoneRegExp =
  /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Please enter your phone number")
    .matches(phoneRegExp, "Phone number is not valid"),
  compName: yup.string().required("Enter your Companies Name"),
  compAddress: yup.string().required("Enter your street"),
  compCity: yup.string().required("Enter your city"),
  compState: yup.string().required("Enter your state"),
  compZip: yup.string().required("Enter your zip"),
  comp_email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
});

function CompanyRegisterFirstStep() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  ///////////////////////////////////////////////Type Ahead render
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [logo, setLogo] = useState("");
  const [logoKey, setLogoKey] = useState("");
  const fileTypes = ["JPEG", "PNG", "JPG"];
  const [view, setView] = useState(false);

  const handleOpen = () => {
    setView(true);
  };

  const handleClose = () => {
    setView(false);
  };

  const getS3Location = async (key) => {
    if (key != null && key != "") {
      let data = {
        key: key,
      };
      return await getDataFromS3(data);
    }
  };

  const handleConvert = async (file) => {
    function readFileAsync() {
      return new Promise((resolve, reject) => {
        if (!file) {
          return;
        }
        const reader = new FileReader();
        const { id } = store.getState();
        reader.onload = async () => {
          const res = await postImage({
            baseString: `${btoa(reader.result)}`,
            company_id: id,
            fileType: "company",
            fileName: file.name.replace(/ /g, ""),
          });
          if (res.status) {
            setLogoKey(res.data.key);
            store.dispatch({ type: "PHOTO", payload: { photo: res.data.key } });
            let resp = await getS3Location(res.data.key);
            setLogo(resp.data.data.fileLocation);
            handleClose();
          }
        };
        reader.onerror = reject;
        reader.readAsBinaryString(file);
      });
    }
    const newImage = await readFileAsync();
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const onTextChange = (e) => {
    const items = options;
    let suggestions = [];
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = items.sort().filter((v) => regex.test(v));
    }
    setText(value);
    setSuggestions(suggestions);
  };

  const suggestionSelected = (value) => {
    setText(value);
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((state) => (
          <li key={state} onClick={() => suggestionSelected(state)}>
            {state}
          </li>
        ))}
      </ul>
    );
  };
  //////////////////////////////////////////

  const routeParams = useParams(); //to access url variable
  let history = useHistory(); // used to redirect after submit
  const dispatch = useDispatch();

  const onSubmitForm = async (data) => {
    //is going to send info to API to save user data
    try {
      const {
        phoneNumber,
        compName,
        compAddress,
        compCity,
        compZip,
        comp_email,
      } = data;
      var { compState } = data;
      compState = text;
      const { type, step } = routeParams;
      const { id } = store.getState();
      const body = {
        phoneNumber,
        compName,
        compAddress,
        compCity,
        compState,
        compZip,
        id,
        type,
        step,
        comp_email,
        logoKey
      };

      const result = await companyRegister(body);

      if (result.confirmation) {
        history.replace(`/subscription/${type}/2`);
      } else {
        return dispatch(
          showMessage({
            message: result, //text or html
            autoHideDuration: 6000, //ms
            anchorOrigin: {
              vertical: "top", //top bottom
              horizontal: "right", //left center right
            },
            variant: "error", //success error info warning null
          })
        );
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //add a company email needs verification as well in the form
  return (
    <div
      style={{ backgroundColor: "black" }}
      className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card
            style={{ backgroundColor: "#edca33" }}
            className="w-full max-w-384"
          >
            /
            <CardContent
              style={{ backgroundColor: "#edca33" }}
              className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32"
            >
              <img
                className="w-128 m-32"
                src="assets/images/logos/logo1pizaña.png"
                alt="logo"
              />

              <Typography
                variant="h6"
                className="mt-16 mb-24 font-Regular text-18 sm:text-24"
              >
                Company Step 1 of 2
              </Typography>

              <form
                name="registerForm"
                className="flex flex-col justify-center w-full mui__form-input"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                <div className="flex items-center justify-center mb-20">
                  <img
                    onClick={handleOpen}
                    className=" avatar w-96 p-2 box-content"
                    alt="user photo"
                    src={logo ? logo : "assets/images/avatars/profile.jpg"}
                  />
                  <Dialog open={view} onClose={handleClose}>
                    <FileUploader
                      children={
                        <div>
                          <Box
                            sx={{
                              width: 300,
                              height: 300,
                              border: "5px dashed lightblue",
                              borderRadius: 20,
                              pl: 10,
                              pr: 23,
                              pt: 20,
                              pb: 20,
                            }}
                          >
                            <div className="flex flex-col sm:flex sm:flex-row pb-32">
                              <Icon color="action">add_photo_alternate</Icon>{" "}
                              &nbsp;
                              <div>{fileTypes[0]}</div>
                              <div>,{fileTypes[1]} </div>
                              <div>,{fileTypes[2]} </div>
                            </div>
                          </Box>
                        </div>
                      }
                      handleChange={handleConvert}
                      name="file"
                      types={fileTypes}
                    />
                  </Dialog>
                </div>

                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("compName")}
                  className="mb-16"
                  label="Company Name"
                  autoFocus
                  type="name"
                  error={!!errors.compName}
                  helperText={errors?.compName?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("compAddress")}
                  className="mb-16"
                  label="Company Address"
                  type="name"
                  error={!!errors.compAddress}
                  helperText={errors?.compAddress?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("compCity")}
                  className="mb-16"
                  label="Company City"
                  type="name"
                  error={!!errors.compCity}
                  helperText={errors?.compCity?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <div className="TypeAheadDropDown">
                  <input
                    {...register("compState")}
                    onChange={onTextChange}
                    placeholder="Company State *"
                    value={text}
                    type="name"
                    required
                  />
                  {renderSuggestions()}
                </div>

                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("compZip")}
                  className=" my-16 mb-16"
                  label="Company Zip"
                  type="name"
                  error={!!errors.compZip}
                  helperText={errors?.compZip?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("comp_email")}
                  className="mb-16"
                  label="Company Email"
                  type="email"
                  error={!!errors.comp_email}
                  helperText={errors?.comp_email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("phoneNumber")}
                  className="mb-16"
                  label="Phone Number"
                  type="name"
                  error={!!errors.phoneNum}
                  helperText={errors?.phoneNum?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <Button
                  style={{ color: "white" }}
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="Register"
                  type="submit"
                >
                  Create Company
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default CompanyRegisterFirstStep;
