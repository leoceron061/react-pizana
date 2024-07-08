import FormHelperText from "@mui/material/FormHelperText";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import { useHistory, useParams } from "react-router-dom";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { SecureMaskedInput } from "react-control-library";
import InputMask from "react-input-mask";
import Input from "@mui/material/Input";

import * as yup from "yup";
import _ from "@lodash";

import Divider from "@mui/material/Divider";

import React, { useState } from "react";
import { token, companyRegister, postImage } from "./CompanyRegisterFunctions";
import { useDispatch } from "react-redux";
import { showMessage } from "app/store/fuse/messageSlice";
import store from "../../ID_store/store";
import { OutlinedInput } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  employDrivers: yup.string().required("You must enter"),
  dotClass: yup.string().required("You must enter your DOT class"),
  fleetSize: yup.string().required("You must enter your fleet size"),
  subContract: yup.string().required("You must enter"),
  driverbroker: yup.string().required("You must enter"),
  materialbroker: yup.string().required("You must enter"),
  compType: yup.string().required("You must enter"),
  ssn: yup.string().required("You must enter")
  //invoice: yup.string(),
});

function CompanyRegisterSecondStep() {
  const [ssn, setSsn] = React.useState("");
  const [data, setData] = React.useState("");
  const ssnMask = [
    /^[0-9]*$/,
    /^[0-9]*$/,
    /^[0-9]*$/,
    "-",
    /^[0-9]*$/,
    /^[0-9]*$/,
    "-",
    /^[0-9]*$/,
    /^[0-9]*$/,
    /^[0-9]*$/,
    /^[0-9]*$/,
  ];
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const routeParams = useParams(); //to access url variable
  let history = useHistory(); // used to redirect after submit
  const dispatch = useDispatch();

  const [w9, setW9] = useState(null);
  const [employ, setEmploy] = useState("");
  const [comp, setComp] = useState("");
  const [sub, setSub] = useState("");
  const [dbroker, setDbroker] = useState("");
  const [mbroker, setMbroker] = useState("");

  const handleEmploy = (e) => {
    setEmploy(e.target.value);
  };
  const handleComp = (e) => {
    setComp(e.target.value);
  };
  const handleSub = (e) => {
    setSub(e.target.value);
  };
  const handleDbroker = (e) => {
    setDbroker(e.target.value);
  };
  const handleMbroker = (e) => {
    setMbroker(e.target.value);
  };
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = async (e) => {
    if (e.target.files[0].type !== "application/pdf") {
      document.getElementById("wform").value = null;
      return dispatch(
        showMessage({
          message: "Only PDF files accepted", //text or html
          autoHideDuration: 6000, //ms
          anchorOrigin: {
            vertical: "top", //top bottom
            horizontal: "right", //left center right
          },
          variant: "error", //success error info warning null
        })
      );
    } //clears the file chosen
    else {
      // let url = URL.createObjectURL(e.target.files[0]);
      // setW9(url);
      function readFileAsync() {
        return new Promise((resolve, reject) => {
          const file = e.target.files[0];
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
              fileName: file.name.replace(/ /g,''),
            });
            if (res.status) {
              setW9(res?.data?.key);
            }
          };
          reader.onerror = reject;
          reader.readAsBinaryString(file);
        });
      }
      const newImage = await readFileAsync();
      // onChange(newImage.payload.data.key);
    }
  };

  const Skip = async () => {
    //get a token
    const { id } = store.getState();
    const result = await token(id);
    store.dispatch({ type: "LOG_IN", payload: { id } });
    localStorage.setItem("token", result);
    history.replace(`/coming-soon`);
  };

  const onSubmitForm = async (data) => {
    try {
      console.log(data);
      console.log(w9); //not adding yet

      const {
        employDrivers,
        dotClass,
        fleetSize,
        subContract,
        driverbroker,
        materialbroker,
        compType,
        ssn /* invoice */,
      } = data;
      const { type, step } = routeParams;
      const { id } = store.getState();

      //get last 4

      const newssn = ssn.slice(-4);

      const body = {
        id,
        type,
        step,
        employDrivers,
        dotClass,
        fleetSize,
        subContract,
        driverbroker,
        materialbroker,
        compType,
        w9,
        newssn /*invoice*/,
      };

      const result = await companyRegister(body);
      if (result.token) {
        const { id, compacct, settings } = result;
        localStorage.setItem("token", result.token);
        store.dispatch({ type: "LOG_IN", payload: { id, compacct, settings } });
        history.replace(`/dashboard`);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      style={{ backgroundColor: "#000000" }}
      className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="w-full max-w-384">
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
                Company Step 2 of 2
              </Typography>

              <form
                name="registerForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                <FormLabel style={{ color: "black" }}>
                  Business Entity:{" "}
                </FormLabel>
                <Select
                  style={{ backgroundColor: "white" }}
                  {...register("compType")}
                  value={comp}
                  onChange={handleComp}
                  id="comp"
                  required
                >
                  <MenuItem value={"LLC"}>LLC</MenuItem>
                  <MenuItem value={"DBA"}>DBA</MenuItem>
                  <MenuItem value={"S-CORP"}>S-CORP</MenuItem>
                  <MenuItem value={"PARTNERSHIP"}>Partnership</MenuItem>
                </Select>

                <FormLabel style={{ color: "black" }}>
                  Do you Employ Drivers:{" "}
                </FormLabel>
                <Select
                  style={{ backgroundColor: "white" }}
                  {...register("employDrivers")}
                  value={employ}
                  onChange={handleEmploy}
                  id="employ"
                  required
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>

                <FormLabel style={{ color: "black" }}>
                  What is your DOT Classification:{" "}
                </FormLabel>
                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("dotClass")}
                  className="mb-16"
                  autoFocus
                  type="name"
                  error={!!errors.dotClass}
                  helperText={errors?.dotClass?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <FormLabel style={{ color: "black" }}>
                  Size of Fleet:{" "}
                </FormLabel>
                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("fleetSize")}
                  className="mb-16"
                  autoFocus
                  type="name"
                  error={!!errors.fleetSize}
                  helperText={errors?.fleetSize?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
                <FormLabel style={{ color: "black" }}>
                  Do you sub contract?:{" "}
                </FormLabel>
                <Select
                  style={{ backgroundColor: "white" }}
                  {...register("subContract")}
                  value={sub}
                  onChange={handleSub}
                  id="sub"
                  required
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>

                <FormLabel style={{ color: "black" }}>
                  Do you Broker Drivers:{" "}
                </FormLabel>
                <Select
                  style={{ backgroundColor: "white" }}
                  {...register("driverbroker")}
                  value={dbroker}
                  onChange={handleDbroker}
                  id="dbroker"
                  required
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>

                <FormLabel style={{ color: "black" }}>
                  Do you Broker Materials:{" "}
                </FormLabel>
                <Select
                  style={{ backgroundColor: "white" }}
                  {...register("materialbroker")}
                  value={mbroker}
                  onChange={handleMbroker}
                  id="mbroker"
                  required
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>

                <FormLabel style={{ color: "black" }}>SSN: </FormLabel>
                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("ssn")}
                  className="mb-16"
                  autoFocus
                  type="name"
                  error={!!errors.ssn}
                  helperText={errors?.ssn?.message}
                  variant="outlined"
                  fullWidth
                />

                {/* <FormLabel style={{ color: "black" }}>SSN: </FormLabel>

                <SecureMaskedInput
                  style={{ height: "50px" }}
                  {...register("ssn")}
                  mask={ssnMask}
                  className="w-full"
                  value={ssn}
                  fullWidth
                  onChange={(e) => setSsn(e.target.value)}
                  secure={{
                    getValue: (detail, data) => {
                      if (detail.value.length < 9) {
                        return data;
                      }
                      return `**-***-${detail.value.substring(
                        detail.value.length - 4,
                        detail.value.length
                      )}`;
                    },
                  }}
                >
                  <Icon className="text-20" color="action">
                    {showPassword ? "visibility" : "visibility_off"}
                  </Icon>
                </SecureMaskedInput> */}

                <FormLabel style={{ color: "black" }}>Upload W9: </FormLabel>
                <TextField
                  className="mb-0"
                  id="wform"
                  {...register("wform")}
                  onChange={changeHandler}
                  type="file"
                  accept=".docx"
                  error={!!errors.name}
                  helperText={errors?.name?.message}
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
                  Create Company Account
                </Button>
                <div className="my-0 flex items-center justify-center">
                  <Divider className="w-32" />
                  <span className="mx-8 font-Regular">OR</span>
                  <Divider className="w-32" />
                </div>

                <Button
                  style={{ color: "white" }}
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto "
                  aria-label="Register"
                  type="button"
                  onClick={Skip}
                >
                  Do Later
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default CompanyRegisterSecondStep;
