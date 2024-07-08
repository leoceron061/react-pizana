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
import * as yup from "yup";
import _ from "@lodash";
import InputAdornment from "@mui/material/InputAdornment";
import { constants } from "../../../../constants";

import Divider from "@mui/material/Divider";

//the original
import React, { useState } from "react";
//the register page
//will eventually have token/user validation to swiftly go to dashboard if token is still valid

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
  ssn: yup.string().required("You must enter"),
  //invoice: yup.string(),
});

function CompanyRegisterSecondStep() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleChange(event) {
    this.setState({ fieldValue: event.target.value });
  }

  const routeParams = useParams(); //to access url variable
  let history = useHistory(); // used to redirect after submit

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

  const changeHandler = (e) => {
    if (e.target.files[0].type !== "application/pdf") {
      document.getElementById("wform").value = null;
      console.log("File must be a pdf");
    } //clears the file chosen
    else {
      setW9(e.target.files[0].name);
    }
  };

  const Skip = async () => {
    //get a token
    const { id } = routeParams;
    const body = { id };
    const response = await fetch(
      `http://${constants.URLLOCAL}:5000/auth/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const parseRes = await response.json();
    localStorage.setItem("token", parseRes.token);
    history.replace(`/coming-soon/test`);
  };

  const onSubmitForm = async (data) => {
    try {
      console.log(routeParams.id + "-" + routeParams.type);
      console.log(data);
      console.log(w9); //not adding yet
      //console.log("data from this form saved")
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
      const { id, type, step } = routeParams;

      //get last 4

      const newssn = ssn.length < 10;
      console.log(ssn);

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

      const response = await fetch(
        `http://${constants.URLLOCAL}:5000/auth/register-type`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        history.replace(`/coming-soon/test`);
      } else {
        console.log(parseRes);
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
                <FormLabel style={{ backgroundColor: "white" }}>
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

                <FormLabel style={{ backgroundColor: "white" }}>
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

                <FormLabel style={{ backgroundColor: "white" }}>
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

                <FormLabel style={{ backgroundColor: "white" }}>
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
                <FormLabel style={{ backgroundColor: "white" }}>
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

                <FormLabel style={{ backgroundColor: "white" }}>
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

                <FormLabel style={{ backgroundColor: "white" }}>
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

                <FormLabel hidden>Starting Invoice Number: </FormLabel>
                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("invoice")}
                  className="mb-16"
                  hidden
                  autoFocus
                  type="name"
                  error={!!errors.ssn}
                  helperText={errors?.ssn?.message}
                  variant="outlined"
                  /* required */
                  fullWidth
                />

                <FormLabel>SSN: </FormLabel>

                <input
                  type="text"
                  value={
                    "xxx-xxx-" +
                    this.state.fieldValue.substr(
                      this.state.fieldValue.length - 4
                    )
                  }
                  onChange={this.handleChange}
                />

                <FormLabel>Upload W9: </FormLabel>
                <TextField
                  style={{ backgroundColor: "white" }}
                  className="mb-0"
                  id="wform"
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
