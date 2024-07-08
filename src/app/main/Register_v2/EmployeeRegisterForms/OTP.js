import FormHelperText from '@mui/material/FormHelperText';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link, useHistory, useParams} from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';

import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux';
import { sendOTP, verifyOTP } from './EmployeeRegisterFunctions';
import { showMessage } from 'app/store/fuse/messageSlice';
import store from '../../ID_store/store'


/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  otp: yup.string().required()
});



function RegisterPage() {
  let history = useHistory(); // used to redirect after submit
  const routeParams = useParams()

  
  const { register, formState:{errors}, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });


  useEffect(async () => {
   //1. send  otp
   const {id} = store.getState()
   const code = routeParams.code
   await sendOTP({id,code})
  }, []);
  

  const dispatch = useDispatch()

  const {id} = store.getState()
  const {code} = routeParams

  const resendOTP = () => {
    const track = "track"
    sendOTP({id,code,track})
    return  dispatch(   
      showMessage({
      message     : (
        "Password was resent!"
      ),//text or html
      autoHideDuration: 6000,//ms
      anchorOrigin: {
        vertical  : 'top',//top bottom
        horizontal: 'right'//left center right
      },
      variant: 'success'//success error info warning null
    }))
  }

  const onSubmitForm = async (data) => {
    try {
      const {otp} = data
        //1. verify if code is correct
        const result = await verifyOTP({id, otp})
        //2. if correct redirect to dashboard
        if(result.answer == true ){
          localStorage.setItem("token",result.token)
          history.replace(`/coming-soon/${id}`)}
        else{return  dispatch(   
          showMessage({
          message     : (
            "Password incorrect! Try again or resend password."
          ),//text or html
          autoHideDuration: 6000,//ms
          anchorOrigin: {
            vertical  : 'top',//top bottom
            horizontal: 'right'//left center right
          },
          variant: 'error'//success error info warning null
        }))}
      }
     
    catch (err) {
      console.error(err.message)}
  }
  

  return (
    <div style={{ backgroundColor: "black" }} className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent  style={{ backgroundColor: "#edca33" }} className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/logo1pizaña.png" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24">
                Enter Password
              </Typography>

              <form
                name="registerForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                   
                    <TextField
                     style={{ backgroundColor: "white" }}
                    {...register("otp")}
                      className="mb-16"
                      label="One Time Password"
                      type="name"
                      error={!!errors.otp}
                      helperText={errors?.otp?.message}
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
                  Create an account
                </Button>


                <Button
                 style={{ color: "white" }}
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="Resend"
                  onClick ={resendOTP}
                >
                  Resend Password
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
