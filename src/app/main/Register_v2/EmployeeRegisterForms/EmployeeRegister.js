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
import { Link, useHistory, useParams} from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';

import React, {useEffect, useState} from 'react'
import {checkLinkCode,changeInviteFlags, resendInvite} from './EmployeeRegisterFunctions'

import store from '../../ID_store/store'

//the register page
//will eventually have token/user validation to swiftly go to dashboard if token is still valid

/**
 * Form Validation Schema
 */
const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  phoneNumber: yup.string().required("Please enter your phone number").matches(phoneRegExp, "Phone number is not valid"),
  Firstname: yup.string().required('You must enter your first name'),
  Lastname: yup.string().required('You must enter your last name'),
  acceptTermsConditions: yup.boolean().oneOf([true], 'The terms and conditions must be accepted.'),
});



function RegisterPage() {
  let history = useHistory(); // used to redirect after submit
  const routeParams = useParams()
  
  const { register, formState:{errors}, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState('second');

  useEffect(async () => {
    //function call to check if code is authentic 
    const {code} = routeParams
    const temp = await checkLinkCode(code)
    console.log(temp)
    console.log("employeeregister line 53 printing the data returned from checkLinkCode:")
    console.log(temp)
    setData(temp)
    if(temp == false){history.replace("/404")}//code does not exist
    if(temp.id){history.replace(`/confirm-otp/${temp.id}/${code}`)}//in case user exists before inputting password
    if(temp == "invalid"){
      await resendInvite(code)
      history.push("/resend")}//code exists but is not valid anymore must resend
    else{
      if(temp.comm == "email"){setEmail(temp.sent_to)}//code exists and is valid prefill
      else{setPhone(temp.sent_to)}}
    
  }, []);

  
  



  const onSubmitForm = async (data) => {
      //*1. has to check if the invite code exists in the invitation table (taken care of in useEffect)
      //*2. has to check if the phone number matches the invite (not anymore, them coming here with the link is enough)

      //3. change the accept invite, active account flags
      const {Firstname,Lastname,phoneNumber,email} = data
      const code = routeParams.code
      const info  = {Firstname,Lastname,phoneNumber,email,code}
      const result = await changeInviteFlags(info)
      console.log("line 77 submit function printing the result of changeInviteFlags:")
      console.log(result)
      const id = result
      store.dispatch({type: 'LOG_IN', payload: {id}})

      //get user_id
      if(result){history.replace(`/confirm-otp/${code}`)} //temp takes user to otp screeen
      //4. enter correct OTP (save otp to user then if correct set to blank)
  }

  return (
    <div    style={{ backgroundColor: "black" }} className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384" >
            <CardContent    style={{ backgroundColor: "#edca33" }} className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32" >
              <img className="w-128 m-32" src="assets/images/logos/logo1pizaña.png" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24">
                Sign Up
              </Typography>
kkk   
              <form
                name="registerForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                   <FormControl className="items-center" error={!!errors.email}>
                    {data.comm == 'email' ? 
                    <TextField
                    style={{ backgroundColor: "white" }}
                    {...register("email")}
                      className="mb-16"
                      value={email}
                      label="Email"
                      type="email"
                      onChange={(e) => {setEmail(e.target.value)}}
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      variant="outlined"
                      fullWidth
                    />:
                    <TextField
                    style={{ backgroundColor: "white" }}
                    {...register("email")}
                      className="mb-16"
                      value={email}
                      label="Email"
                      type="email"
                      onChange={(e) => {setEmail(e.target.value)}}
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      variant="outlined"
                      autoFocus
                      fullWidth
                    />}
                    </FormControl>

                    <FormControl className="items-center" error={!!errors.phoneNumber}>
                    {data.comm == 'phone' ? 
                    <TextField
                    style={{ backgroundColor: "white" }}
                    {...register("phoneNumber")}
                      className="mb-16"
                      value={phone}
                      label="Phone Number"
                      onChange={(e) => {setPhone(e.target.value)}}
                      error={!!errors.phoneNumber}
                      helperText={errors?.phoneNumber?.message}
                      variant="outlined"
                      autoFocus
                      fullWidth
                    />:
                    <TextField
                    style={{ backgroundColor: "white" }}
                    {...register("phoneNumber")}
                      className="mb-16"
                      value={phone}
                      label="Phone Number"
                      onChange={(e) => {setPhone(e.target.value)}}
                      error={!!errors.phoneNumber}
                      helperText={errors?.phoneNumber?.message}
                      variant="outlined"
                      
                      fullWidth
                    />}
                    </FormControl>

                    <TextField
                        style={{ backgroundColor: "white" }}
                    {...register("Firstname")}
                      className="mb-16"
                      label="First Name"
                      type="name"
                      variant="outlined"
                      required
                      fullWidth
                    />

                    <TextField
                        style={{ backgroundColor: "white" }}
                    {...register("Lastname")}
                      className="mb-16"
                      label="Last Name"
                      type="name"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  

                
                
                    <FormControl className="items-center" error={!!errors.acceptTermsConditions}>
                      <FormControlLabel
                        label="I read and accept terms and conditions"//link to read page
                        control= {<Checkbox style={{ color: "black" }} {...register("acceptTermsConditions")} />}
                      />
                      <FormHelperText>{errors?.acceptTermsConditions?.message}</FormHelperText>
                    </FormControl>
                  

                <Button
                 style={{ color: "white" }}
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="Register"
                  type="submit"
                >
                  Create an account
                </Button>
              </form>

              
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
 }

export default RegisterPage
