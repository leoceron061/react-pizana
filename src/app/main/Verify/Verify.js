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
import { verify2FA } from "../Login_v2/LoginFunctions";
import store from "../ID_store/store";
import InputAdornment from "@mui/material/InputAdornment";
import DialogContentText from '@mui/material/DialogContentText';
import Icon from "@mui/material/Icon";
import React, { useEffect, useState } from "react";
import Check_refresh from '../Check_refresh';
import IconButton from "@mui/material/IconButton";
import Login_v2 from "../Login_v2/Login_v2";

import "./Verify.css"
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

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#365376',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#365376',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});


const schema = yup.object().shape({
  code: yup
    .string()
    .required("You must enter a code"),


});


function Verify() {
  const { user_name } = store.getState()
  let history = useHistory(); // used to redirect
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit, control
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data) => {
    //remember me puts the user_name in storage
    try{
      const email = localStorage.email; 
      const code = data.code;
      const result = await verify2FA({ email, code });
      if(result) {
        return history.replace("/academy/courses");
      } else {
        //TO DO
        //show an alert that the code is not valid,
        //persuade the user to reenter the code
      }
        
      

    }
    catch(error){
      console.log(error);

    }


  };


  return (
    <div style={{ backgroundColor: "#1E1E2F" }} className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>

          <div style={{ backgroundColor: "#27293d" }}>
            <Card component={motion.div}
              class="tarjeta"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ bounceDamping: 0 }}
              className="w-full max-w-384 mx-auto m-16 md:m-0 rounded-20 md:rounded-none"
              square
              layout>
              <CardContent

                className="flex flex-col items-center justify-center p-16 sm:p-32 md:p-48 md:pt-128 "
              >
                <img
                  className="w-129 m-62"
                  src="assets/images/logos/pizanalogo.png"
                  alt="logo"
                />

                <Typography
                  style={{ color: "white" }}
                  variant="h6"
                  className="mt-16 mb-24 font-Regular text-18 sm:text-24"
                >
                  Verificación de la Cuenta
                </Typography>

                <form
                  name="2FAForm"
                  className="flex flex-col justify-center w-full"
                  onSubmit={handleSubmit(onSubmitForm)}
                >

                  <Controller
                    name="code"
                    control={control}
                    render={({ field }) => (
                      <TextField style={{ backgroundColor: "white" }}
                        {...field}
                        className="mt-8 mb-16 mx-4"
                        placeholder="Codigo de Verificación"
                        id="code"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required

                      />
                    )}
                  />

                  <Button

                    variant="outlined"

                    style={{ color: "white", backgroundColor: "#29314c", borderColor: "#0B56BF" }}
                    className="w-224 mx-auto mt-16"
                    aria-label="LOG IN"
                    type="submit"
                  >
                    Verificar
                  </Button>
                </form>



              </CardContent>
            </Card>
          </div>


        </motion.div>
      </div>
    </div>
  );
}

export default Verify;
