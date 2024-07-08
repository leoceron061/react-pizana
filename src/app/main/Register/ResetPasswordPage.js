import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';

import {constants} from '../../../constants'

//displays the RESET password page
//will redirect to login page

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});


function ResetPasswordPage() {
  const { formState:{errors}, handleSubmit, register} = useForm({
    resolver: yupResolver(schema),
  });

  const {id} = useParams()


  const onSubmitForm = async (data) => {

    
    
    try {
     
      console.log(id)
      const {password,passwordConfirm}= data
      const body = {id,password}

      

      const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/password-reset`, 
            {method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
            })
            
            const parseRes = await response.json()

            
            console.log(parseRes)
      
    } catch (error) {
     

      console.error(error.message)
      
  }

    

  
  }

  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/stah_logo2.png" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24">
                Reset your password
              </Typography>

              <form
                name="resetForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                    <TextField
                      {...register("password")}
                      className="mb-16"
                      label="Password"
                      type="password"
                      name="password"
                      error={!!errors.password}
                      helperText={errors?.password?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                

                
                    <TextField
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
              

                <Button
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="Reset"
                  type="submit"
                >
                  Reset my password
                </Button>
              </form>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <Link className="font-Regular" to="/login">
                  Go back to login
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
