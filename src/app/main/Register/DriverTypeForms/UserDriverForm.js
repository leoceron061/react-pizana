import FormHelperText from '@mui/material/FormHelperText';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useHistory,useParams } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';

import {constants} from '../../../../constants'


import React, {useState} from 'react'
//the register page
//will eventually have token/user validation to swiftly go to dashboard if token is still valid

/**
 * Form Validation Schema
 */
//create validation at backend like i do for password and email
 const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/
 const schema = yup.object().shape({
 phoneNumber: yup.string().required("Please enter your phone number").matches(phoneRegExp, "Phone number is not valid"),
 fname: yup.string().required("Enter your First Name"),
 lname: yup.string().required("Enter your Last Name"),

});



function UserDriverForm() {
  
  const { register, formState:{errors}, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });



  const routeParams= useParams()//to access url variable
  let history = useHistory(); // used to redirect after submit



  const onSubmitForm =  async (data) => {//is going to send info to API to save user data
    try {
      console.log(routeParams.id +"-"+routeParams.type)
      console.log({...data})
      console.log("data from this form saved")
      
      const {fname,lname,phoneNumber} = data
      const {id,type} = routeParams

      // if step is given use that instead
      var step = ""
      if(routeParams.step){step = routeParams.step}
      else{step = "1"}

      const body = {fname,lname,phoneNumber, id, type,step}
      const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/register-type`, 
            {method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body)
          })
      
        const parseRes = await response.json()
        if(parseRes === true){
          history.replace(`/${routeParams.id}/usr-type/${routeParams.type}/2`)}
        else{console.log(parseRes)}

      
    } 
    catch (err) {
      console.error(err.message)}
  }

  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">/
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/stah_logo2.png" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24">
                Driver Step 1 of 3
              </Typography>

              <form
                name="registerForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
               
                    <TextField
                    {...register("fname")}
                      className="mb-16"
                      label="First Name"
                      autoFocus
                      type="name"
                      error={!!errors.fname}
                      helperText={errors?.fname?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />

                    <TextField
                    {...register("lname")}
                      className="mb-16"
                      label="Last Name"
                      autoFocus
                      type="name"
                      error={!!errors.lname}
                      helperText={errors?.lname?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />

                     <TextField
                    {...register("phoneNumber")}
                      className="mb-16"
                      label="Enter your Phone Number"
                      autoFocus
                      type="name"
                      error={!!errors.phoneNum}
                      helperText={errors?.phoneNum?.message}
                      variant="outlined"
                      required
                      fullWidth
                    /> 
                  

                <Button
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="Register"
                  type="submit"
                >
                  Create Driver Account
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
 }

export default UserDriverForm
