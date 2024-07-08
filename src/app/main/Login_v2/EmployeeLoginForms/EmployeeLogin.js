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
import { useDispatch} from 'react-redux';

import React, {useEffect, useState} from 'react'
import {employeeVerify,sendOTP, getId} from './EmployeeLoginFunctions'

import store from '../../ID_store/store'

//the register page
//will eventually have token/user validation to swiftly go to dashboard if token is still valid

/**
 * Form Validation Schema
 */
const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/
const schema = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter an email'),
  
});



function EmployeeLogin() {
  let history = useHistory(); // used to redirect after submit
  
  const { register, formState:{errors}, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false)

  useEffect(async () => {//checks for user if they exist and are an employee as they type
      const result = await employeeVerify(email)
      if(result == true){setShow(true)}
      else{setShow(false)}
      

   
  }, [email]);
  
   
  const onSubmitForm = async (data) => {
      //1. use the data they input and send the otp to that email or phone
      const {email} = data
      const id = await getId(email)
      await sendOTP({id})
      store.dispatch({type: 'LOG_IN', payload: {id}})
      history.replace(`/employee-otp`)

  }

  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/logo1pizaña.png" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24">
                Log In
              </Typography>

              <form
                name="registerForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                   <FormControl className="items-center" error={!!errors.email}>
                    <TextField
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
                    />
                    </FormControl>


                
                  
                {show ? <Button
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="Register"
                  type="submit"
                >
                  Go
                </Button>:null}
                
              </form>

              
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
 }

export default EmployeeLogin
