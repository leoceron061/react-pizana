import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import * as yup from "yup";
import _ from "@lodash";
import { useDispatch } from "react-redux";
import { showMessage } from "app/store/fuse/messageSlice";
import { useHistory } from "react-router-dom";
import { login, verifyToken } from "./LoginFunctions";
import store from "../ID_store/store";
import Check_refresh from '../Check_refresh';
import InputAdornment from "@mui/material/InputAdornment";
import Icon from "@mui/material/Icon";
import LockIcon from '@mui/icons-material/Lock';
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import "./Login_v2.css"
import { styled, darken } from '@mui/material/styles';
const Root = styled('div')(({ theme }) => ({
  '& .Login3-leftSection': {},

  '& .Login3-rightSection': {
    background: `linear-gradient(to right, ${theme.palette.action.disabled} 0%, ${darken(
      theme.palette.action.disabled,
      0.5
    )} 100%)`,

  },
}));

// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: 'white',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#365376',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#365376',
//     },
//     '&:hover fieldset': {
//       borderColor: 'white',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'white',
//     },
//     '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
//       color: 'white',
//     },
//   },
// });

//the login
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
  rememberMe: yup.boolean(),
});

var remembered = "";
remembered = localStorage.getItem("user_name"); //to set email remember me at each refresh

function Login_v2() {
  let history = useHistory(); // used to redirect
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });


  useEffect(async () => {
    console.log("useEffect was called---");

    if (localStorage.token) {

      const token = localStorage.payload;

      const result = await verifyToken(token);

      if (result.answer == true) {
        //if admin flag fill admin fields and get admin fields
        console.log("This is the result from use effect login :   " + result);
        const { id, compacct, logo, settings } = result;
        store.dispatch({ type: "LOG_IN", payload: { compacct, id, settings } });
        if (logo && logo != "") {
          store.dispatch({ type: "PHOTO", payload: { photo: logo } });
        }
        // history.replace(`/coming-soon`)
        console.log(store.getState());
        history.replace(`/academy`);
      } else {
        console.log(result);
      }
    }
  }, []);

  const { email = remembered } = register;

  const onSubmitForm = async (data) => {
    //remember me puts the user_name in storage

    try {
      const { email, password, rememberMe } = data;

      const result = await login({ email, password });

      localStorage.setItem("result", JSON.stringify(result));
      console.log("roooooooooooooooooooole", result)

      if (result.token) {
        const { id, compacct, settings, logo } = result;
        localStorage.setItem("email", email);

        store.dispatch({ type: "LOG_IN", payload: { compacct, id, settings } });
        if (logo && logo != "") {
          store.dispatch({ type: "PHOTO", payload: { photo: logo } });
        }
        localStorage.setItem("token", result.token);
        if (rememberMe) {
          localStorage.setItem("user_name", email);
        } else {
          localStorage.setItem("user_name", " ");
        }
        console.log(result);
        return history.replace("/verify");
      }

      if (result.type) {
        const { id } = result;
        store.dispatch({ type: "LOG_IN", payload: { id } });
        history.replace(`/subscription/${result.type}/${result.step}`);
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
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div
      style={{ backgroundColor: "#1E1E2F" }}
      className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="w-full max-w-384">
            <CardContent
              style={{ backgroundColor: "#27293d" }}
              className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32"
            >
              <img
                className="w-129 m-62"
                src="assets/images/logos/pizanalogo.png"
                alt="logo"
              />

              <Typography style={{ color: "white" }}
                variant="h6"
                className="mt-16 mb-24 font-Regular text-18 sm:text-24"
              >
                Ingrese a su cuenta
              </Typography>

              <form
                name="loginForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("email")}
                  className="mb-16"
                  placeholder="Correo electrónico"
                  defaultValue={localStorage.getItem("user_name") ? localStorage.getItem("user_name") : ""}
                  type="email"
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment >
                        <Icon className="text-20" color="action" style={{color:"#27293d"}}>
                          email
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  required
                  fullWidth
                />

                <TextField
                  style={{ backgroundColor: "white" }}
                  {...register("password")}
                  className="mb-16"
                  placeholder="Contraseña"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  required
                  fullWidth
                  InputProps={{
                    className: "pr-2",
                    type: showPassword ? "text" : "password",
                    endAdornment: (
                      <InputAdornment>
                        {/* <Icon className="text-20" color="action">
                          lock
                        </Icon> */}
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon style={{color:"#27293d"}}>
                            {showPassword ? "visibility" : "visibility_off"}
                          </Icon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                  <FormControl>
                    <FormControlLabel
                      style={{ color: "white" }}
                      label="Recuerdame"
                      control={
                        <Checkbox
                          style={{ color: '#0B56BF' }}
                          {...register("rememberMe")}
                        />
                      }
                    />
                  </FormControl>

                  <Link
                    style={{ color: "#0B56BF" }}
                    className="font-Regular"
                    to="/frgt-password"
                  >
                    Olvidó su Contraseña?
                  </Link>
                </div>

                <Button
                  style={{ color: "white" }}
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="LOG IN"
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
              </form>

              {/* <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <span className="font-Regular" style={{ color: "white" }}>¿No tienes una cuenta?</span>
                <Link
                  style={{ color: "#0B56BF" }}
                  className="font-Regular"
                  to="/subscription/admin"
                >
                  Crea una cuenta
                </Link>
              </div> */}

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Login_v2;
