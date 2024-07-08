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
import FormLabel from '@mui/material/FormLabel';

import {constants} from '../../../../constants'

import React, {useEffect,useState} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'

//placeholder page for the dahsboard at the moment
//dashboard will need to verify if use should be here before allowing in, check token
//this is to display the button that I need

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
});



function ComingSoonPage() {
  let history = useHistory(); // used to redirect 
  let routeParams = useParams() //to get url parameters


  const { formState:{errors}, handleSubmit} = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });


  ////////////////////////////////
  
  var message = ""
  const [appear, setAppear] = useState()
  const [userType, setUserType] = useState()
  const [userStep, setUserStep] = useState()

  useEffect(async ()=> {//checks if the button needs to appear
    //1. get user
    const {id} = routeParams
    //2. figure out type
    const body = id
    const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/info `, 
            {method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body)
          })
    const parseRes = await response.json()
    const {type,step} = parseRes
    //3. if type is company button will appear with message
    if(type == "company"){
      message = "Become a Driver"
      setAppear(true)}
    //4. if type is comp-driver and the register step is complete show nothing 
    //5. if type is comp-driver figure out what step they in and change button text 
    if(type == "comp-driver"){
      if(step == "complete"){setAppear(false)}
      else{
        setAppear(true)
        message = "Continue Driver Setup"}
    }
    //and button should take user to register step
  }, [])


  function addAccount() {//'/:id/usr-type/:type?/:step?'
    if(appear == true){ 
      if(userType == "company"){history.push(`/${routeParams.id}/usr-type/comp-driver/1`)}
      else{history.push(`/${routeParams.id}/usr-type/comp-driver/${userStep}`)}
    }
  }

  async function LogOff() {// logs user off to prevent auto redirect to dahsboard
    const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/logout`, 
    {method: "GET",
    headers: {token: localStorage.token}
    //body: JSON.stringify(body)
  })
    
    const parseRes = await response.json()
    if(parseRes === true){
      console.log("Log out successful!")
      localStorage.removeItem("token")
      history.replace("/")
    }

  else{console.log("Unauthorized user, Server Error")
  localStorage.removeItem("token")
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
                Its not quite ready yet, but we are working hard and it will be ready in
                approximately:
              </Typography>

              <FuseCountdown endDate="2022-02-20" className="my-48" />

              <Divider className="w-48" />
              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <Link style={{color: "blue"}} className="font-Regular" to="/">
                  Return to Login
                </Link>
              </div>
              {appear? 
              <Button
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="LOG IN"
                  onClick={addAccount}
                >
                  {message}
                </Button>
                : 
                <FormLabel>{userType}</FormLabel>}

              <Button
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="LOG IN"
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
