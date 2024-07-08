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
import {constants} from '../../../constants'

//displays the forgot password REQUEST screen

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
});



function ForgotPasswordPage() {
  const { register, formState:{errors}, handleSubmit} = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmitForm = async (data) => {

    console.log(data)
    
    try {
      const {email}= data
      const body = {email}

      

      const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/frgt-password-req`, 
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
                Recover your passwoooooord
              </Typography>

              <form
                name="recoverForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                
                    <TextField
                      {...register("email")}
                      className="mb-16"
                      label="Email"
                      autoFocus
                      type="email"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
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
                  Send reset link
                </Button>
              </form>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <Link className="font-Regular" to="/">
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

export default ForgotPasswordPage;
