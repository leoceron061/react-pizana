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
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import _ from "@lodash";
import { constants } from "../../../constants";
import React, { useEffect } from "react";

//the register page
//will eventually have token/user validation to swiftly go to dashboard if token is still valid

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  acceptTermsConditions: yup
    .boolean()
    .oneOf([true], "The terms and conditions must be accepted."),
});

function RegisterPage() {
  let history = useHistory(); // used to redirect after submit

  useEffect(async () => {
    const response = await fetch(
      `http://${constants.URLLOCAL}:5000/auth/is-verify`,
      { method: "GET", headers: { token: localStorage.token } }
    );
    const parseRes = await response.json();
    if (parseRes === true) {
      history.replace("/coming-soon/test");
    } else {
      console.log(parseRes);
      console.log("login or register");
    }
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data) => {
    try {
      const { email, password } = data;
      const body = { email, password };

      const response = await fetch(
        `http://${constants.URLLOCAL}:5000/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();
      if (parseRes.id) {
        console.log(parseRes.id);
        history.replace(`/${parseRes.id}/usr-type`);
      } else {
        console.log(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img
                className="w-128 m-32"
                src="assets/images/logos/logo1pizaña.png"
                alt="logo"
              />

              <Typography
                variant="h6"
                className="mt-16 mb-24 font-Regular text-18 sm:text-24"
              >
                Create an account
              </Typography>

              <form
                name="registerForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                <TextField
                   style={{ textDecorationColor: "white", backgroundColor: "white" }}
                  {...register("email")}
                  className="mb-16"
                  label="Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                   style={{ textDecorationColor: "white", backgroundColor: "white" }}
                  {...register("password")}
                  className="mb-16"
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                   style={{ textDecorationColor: "white", backgroundColor: "white" }}
                  {...register("passwordConfirm")}
                  className="mb-16"
                  label="Password (Confirm)"
                  type="password"
                  error={!!errors.passwordConfirm}
                  helperText={errors?.passwordConfirm?.message}
                  variant="outlined"
                  required
                  fullWidth
                />

                <FormControl
                  className="items-center"
                  error={!!errors.acceptTermsConditions}
                >
                  <FormControlLabel
                    label="I read and accept terms and conditions" //link to read page
                    control={
                      <Checkbox {...register("acceptTermsConditions")} />
                    }
                  />
                  <FormHelperText>
                    {errors?.acceptTermsConditions?.message}
                  </FormHelperText>
                </FormControl>

                <Button
                  variant="contained"
                  color="secondary"
                  className="w-224 mx-auto mt-16"
                  aria-label="Register"
                  type="submit"
                >
                  Create an account
                </Button>
              </form>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <span className="font-Regular">Already have an account?</span>
                <Link className="font-Regular" to="/">
                  Login
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default RegisterPage;
