import FuseCountdown from '@fuse/core/FuseCountdown';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import _ from '@lodash';

import store from '../ID_store/store'
import { constants } from '../../../constants'


import { useParams, Link, useHistory } from 'react-router-dom'

//placeholder page for the dahsboard at the moment
//dashboard will need to verify if use should be here before allowing in

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
});



function ComingSoonPage() {
  let history = useHistory(); // used to redirect 


  const { formState: { errors }, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });


  ////////////////////////////////
 
  async function LogOff() {// logs user off to prevent auto redirect to dahsboard
    const response = await fetch(`${constants.URLLOCAL}/login/logout`,
      {
        method: "GET",
        headers: { token: localStorage.token }
        //body: JSON.stringify(body)
      })

    console.log(store.getState())
    store.dispatch({ type: 'LOG_OUT' })
    console.log(store.getState())
    const parseRes = await response.json()
    if (parseRes === true) {
      console.log("Log out successful!")
      localStorage.removeItem("token")
      history.replace("/")
    }

    else {
      console.log("Unauthorized user, Server Error")
      history.replace("/")
    }
  }
  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-32 text-center">
              <img className="w-128 m-32" src="assets/images/logos/stah_logo2.png" alt="logo" />

              <Typography variant="subtitle1" className="mb-16 font-Regular">
                Hey! Thank you for checking out our app.
              </Typography>

              <Typography color="textSecondary" className="max-w-288">
                It’s not quite ready yet, but we are working hard and it will be ready in
                approximately:
              </Typography>

              <FuseCountdown endDate="2022-02-20" className="my-48" />

              <Divider className="w-48" />
              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <Link style={{ color: "blue" }} className="font-Regular" to="/">
                  Return to Login
                </Link>
              </div>

              <Button
                variant="contained"
                color="secondary"
                className="w-224 mx-auto mt-16"
                aria-label="LOG OFF"
                onClick={LogOff}
              >
                Log Off
              </Button>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
