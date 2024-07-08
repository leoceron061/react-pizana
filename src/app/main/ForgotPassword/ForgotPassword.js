
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import InputAdornment from '@mui/material/InputAdornment';
import Icon from '@mui/material/Icon';
import { useDispatch } from 'react-redux';
import { showMessage } from 'app/store/fuse/messageSlice';
import { useParams } from 'react-router-dom';
import PasswordReset from "./PasswordReset"
import { constants } from "../../../constants";
import { userVerify } from './ForgotPasswordFunctions';
//displays the forgot password REQUEST screen
import "./ForgotPassword.css"
import { styled, darken } from '@mui/material/styles';
import { FormControl } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {otpvalidacion1} from './ForgotPasswordFunctions'

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
const defaultValues = {
  contraseña1: "",
  contraseña2: ""
};

function ForgotPasswordPage (datos) {
  const { register, formState: { errors }, handleSubmit, control,reset } = useForm({
    mode: 'onChange',
    defaultValues,
  });
  const dispatch = useDispatch()
  const routeParams = useParams()
  let history = useHistory();

  useEffect(async () => {
    console.log("useEffect was called---")
    //otp=datos.match.params.password_code
    console.log("otp fronted",datos.match.params.password_code)
    const result = await otpvalidacion1(datos.match.params.password_code);
   
    if(result==true)
    {
      history.replace(`/reset-error`); 
    }
    else{
    }   
  }, []);
  const { password_code } = routeParams;


  const onSubmit = async(data)=> {
    try {   
      const { contraseña1 , contraseña2 } = data

      if(contraseña1 === contraseña2)
      {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^]){8,15}$/;

        if(contraseña1.length>10 && contraseña2.length>10 && regex.test(contraseña1) ){
       
          dispatch(
          showMessage({
            message: (
              "Password changed"
            ),//text or html
            autoHideDuration: 6000,//ms
            anchorOrigin: {
              vertical: 'top',//top bottom
              horizontal: 'right'//left center right
            },
            variant: 'success'//success error info warning null
          }))

        const response = await axios.post(`${constants.URLLOCAL}/auth/reset-password`, {contraseña1,password_code});
        reset({contraseña1:"",contraseña2:""})
        }
        else{
          dispatch(
            showMessage({
              message: (            
              "Please1: \n Password Requirements \n At least 1 Lowercase \n At least 1 Uppercase \n At least 1 Number \n At least 1 special character (@!#$%^&+=) \n 10 Characters minimum \n"                       
              ),//text or html
              autoHideDuration: 6000,//ms
              anchorOrigin: {
                vertical: 'top',//top bottom
                horizontal: 'right'//left center right
              },
              variant: 'success'//success error info warning null
            }))         
        }
      }
      else
      {
        return dispatch(
              showMessage({
                message: (
                  "Contraseñas No son Iguales"
                ),//text or html
                autoHideDuration: 6000,//ms
                anchorOrigin: {
                  vertical: 'top',//top bottom
                  horizontal: 'right'//left center right
                },
                variant: 'success'//success error info warning null
              }))
      }
      } catch (error) {
      console.error(error.message)
    }
  }
  ///////////////////////////////////////////////
  if (routeParams.code) { return <PasswordReset /> }

  if (!routeParams.code) {
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
                className="w-full max-w-400 mx-auto m-16 md:m-0 rounded-20 md:rounded-none"
                square
                layout>
                <CardContent
                  className="flex flex-col items-center justify-center p-16 sm:p-32 md:p-48 md:pt-128 "
                >
                  <img className="imagen" src="assets/images/logos/pizanalogo.png" alt="logo" />
                  <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24" style={{ color: "white" }}>
                    Restablecer contraseña
                  </Typography>

                  <form
                    className="flex flex-col justify-center w-full"
                    onSubmit={handleSubmit(onSubmit)}
                    id="formulario">

                    <FormControl>
                      <Controller
                        name="contraseña1"
                        control={control}
                        
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Ingrese contraseña"                           
                            type="password"
                            variant="outlined"
                            style={{ backgroundColor: "white" }}
                          
                          />
                        )}
                      />
                    </FormControl>
                    <br/>
                    <FormControl>
                      <Controller
                        name="contraseña2"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Confirme contraseña"
                            type="password"
                            variant="outlined"
                            style={{ backgroundColor: "white" }}
                      
                          />
                        )}
                      />
                    </FormControl>
                    <Button style={{ color: "white", backgroundColor: "#29314c", borderColor: "#0B56BF" }}
                      variant="outlined"
                      className="w-224 mx-auto mt-16"
                      aria-label="Reset"
                      type="submit"                      
                    >                    
                      Reestablecer contraseña                   
                    </Button>
                  </form>
                  <div className="flex flex-col items-center justify-center pt-32 pb-24">
                    <Link style={{ color: "#0B56BF" }} className="font-Regular" to="/">
                      Volver a iniciar sesión
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

}

export default ForgotPasswordPage;



