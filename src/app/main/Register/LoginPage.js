import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import {constants} from '../../../constants'
import React , {useEffect} from 'react'

import { useHistory } from "react-router-dom";





//the login
//will eventually have token/user validation to swiftly go to dashboard if token is still valid

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  rememberMe: yup.boolean()

});

var remembered = ""
remembered = localStorage.getItem("user_name")//to set email remember me at each refresh


function LoginPage() {
  let history = useHistory(); // used to redirect 

  
  useEffect(async ()=> {
    const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/is-verify`, 
            {method: "GET",
            headers: {token: localStorage.token}
            //body: JSON.stringify(body)
  })
    const parseRes = await response.json()
    if (parseRes === true) {
      //history.push("/coming-soon/test")
      history.push('/dashboard')
    }
    else {
      console.log(parseRes)
      console.log("login")
    }



  }, [])

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { email = remembered } = register




  const onSubmitForm = async (data) => {
    /*user logs in and has no type, redirect to type choose screen
      user has type but has not finished registering, redirect to type/register
      else user has type and finished register send to dashboard*/

    try {

      const {email, password, rememberMe} = data
      const body = {email,password}
        console.log(data)
      

      const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/login`, 
            {method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
            })
            
            const parseRes = await response.json()

            if(parseRes.token){
              //debugging purpose
              console.log(parseRes)
              localStorage.setItem("token", parseRes.token)//always sets user name to something in the local storage
              if(rememberMe){localStorage.setItem("user_name", email)}
              else{localStorage.setItem("user_name", " ")}

              //redirect here
              history.push("/coming-soon/test")
            }
            else if(parseRes.type === "no type"){history.push(`/${parseRes.id}/usr-type`)}
            else if(parseRes.type === "driver"){history.push(`/${parseRes.id}/usr-type/${parseRes.type}/${parseRes.currentStep}`)}
            else if(parseRes.type === "company"){history.push(`/${parseRes.id}/usr-type/${parseRes.type}/${parseRes.currentStep}`)}
            else if(parseRes.type === "comp-driver"){history.push(`/${parseRes.id}/usr-type/${parseRes.type}/${parseRes.currentStep}`)}

              
                
        }
      
    catch (error) {
    
      console.error(error.message)

    }


    //if all is good redirect to dahsboard need to check jwt token


  }







  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/logo1pizaña.png" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24">
                Looogin to your account
              </Typography>

              <form
                name="loginForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >

                <TextField
                  {...register("email")}
                  className="mb-16"
                  label="Email"
                  autoFocus
                  defaultValue={email}
                  type="email"
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />



                <TextField
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


                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">

                  <FormControl>
                    <FormControlLabel label="Remember Me" control={<Checkbox {...register("rememberMe")} />} />
                  </FormControl>


                  <Link className="font-Regular" to="/frgt-password">
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  variant="contained"
                  color="warning"
                  className="w-224 mx-auto mt-16"
                  aria-label="LOG IN"
                  type="submit"
                >
                  Login
                </Button>
              </form>

              <div className="my-24 flex items-center justify-center">
                <Divider className="w-32" />
                <span className="mx-8 font-Regular">OR</span>
                <Divider className="w-32" />
              </div>

              <Button variant="contained" color="third" size="small" className="w-192 mb-8">
                Log in with Google
              </Button>

              <Button variant="contained" color="third" size="small" className="w-192">
                Log in with Facebook
              </Button>


              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <span className="font-Regular">Don't have an account?</span>
                <Link className="font-Regular" to="/register">
                  Create aaan account
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;
