import FormHelperText from '@mui/material/FormHelperText';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import {useHistory,useParams } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import {constants} from '../../../../constants'

import React, {useState,useEffect} from 'react'
import Divider from '@mui/material/Divider';



/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  hazmatTraining: yup.string().required('You must enter your Hazmat Training'),
  driverclass: yup.string(),
  ssn: yup.string()


});



function DriverRegisterThirdStep() {
  
  const { register, formState:{errors}, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });




  const routeParams= useParams()//to access url variable
  let history = useHistory(); // used to redirect after submit
  
  const [w, setW] = useState(null)//take the file
  const changeHandler = (e) => {
    if(e.target.files[0].type !== "application/pdf"){
      document.getElementById("wform").value = null
    console.log("File must be a pdf")}//clears the file chosen
    else{setW(e.target.files[0].name)}

    
  }

  const [hazmat, setHazmat] = useState("")
  const changeHazmat = (e) => {//change which form needs to be submitted
    setHazmat(e.target.value)
  }

  const [workerType, setWorkerType] = useState("")
  const changeClass = (e) => {//change which form needs to be submitted
    setWorkerType(e.target.value)
  }
  const [showPassword, setShowPassword] = useState(false);
  const [compdriver, setCompdriver] = useState(false)
  const [show, setShow] = useState(false)
  useEffect(() => {// the ssn here if driver
  if(routeParams.type == "driver"){setShow(true)}
  if (routeParams.type == "comp-driver"){setCompdriver(true)}
  }, []) 



    
  const onSubmitForm =  async (data) => {
    try {
      console.log(routeParams.id +"-"+routeParams.type)
      console.log(data)
      console.log(w)

      const {id,step} = routeParams
      var {type} = routeParams

      if(show){//they are a driver
        var {driverclass,hazmatTraining} = data
        

        if(driverclass == "contractor"){
        var changetype = "comp-driver"
        const newbody = {id,changetype}
        const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/change-type`, 
        {method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(newbody)
        })

        const parseRes = await response.json()//successfully changed type
        if(parseRes == true){
          type = changetype
          var body = {id,type,step,hazmatTraining,w}}
        else{console.log(parseRes)}
      }
        else{
          const {ssn} = data
          const newssn = ssn.slice(-4)
          var body = {id,type,step, hazmatTraining,w,newssn}}
      }
      else{//they are a comp-driver so they dont need ssn here
        const {hazmatTraining} = data
        var body = {id,type,step, hazmatTraining,w}
        }

            const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/register-type`, 
            {method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body)
          })

      const parseRes = await response.json()
      if(driverclass == "employee")
      {
        if(parseRes.token){
        localStorage.setItem("token", parseRes.token)
        history.replace(`/coming-soon/test`)}
        else{console.log(parseRes)}
      }
      else if(driverclass == "contractor")
      {
        if(parseRes == true){ history.replace(`/${routeParams.id}/usr-type/comp-driver/4`)}
        else{console.log(parseRes)}
      }
      
      else if(parseRes == true){ history.replace(`/${routeParams.id}/usr-type/${routeParams.type}/4`)}
      else{console.log(parseRes)}

    } 
    catch (err) {
      console.error(err.message)}
  }

  const Skip = async () => {
    //get a token
      const {id} = routeParams
      const body = {id}
      const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/token`, 
              {method: "POST",
              headers: {"Content-Type" : "application/json"},
              body: JSON.stringify(body)
            })
      const parseRes = await response.json()
      localStorage.setItem("token", parseRes.token) 
      history.replace(`/coming-soon/test`)
  }

  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/stah_logo2.png" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24">
                Driver Step 3 of 3
              </Typography>

              <form
                name="registerForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                <div>
                        <FormLabel sx={{ display: 'block' }}>Hazmat Training: </FormLabel>
                        <Select
                        {...register("hazmatTraining")}
                        value = {hazmat}
                        onChange = {changeHazmat}
                        sx = {{display: 'block'}}
                        required
                        >
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                        </Select></div>
                        
                      {show &&
                        <div>
                        <FormLabel sx = {{display: 'block'}}>Class: </FormLabel>
                        <Select
                        {...register("driverclass")}
                        value = {workerType}
                        onChange = {changeClass}
                        sx = {{display: 'block'}}
                        required
                        >
                        <MenuItem value={"contractor"}>contractor</MenuItem>
                        <MenuItem value={"employee"}>employee</MenuItem>
                        </Select>
                        </div>
}
                        
                      {workerType == "employee" &&
                        <div>
                        <FormLabel >Upload W4: </FormLabel>
                        <TextField
                        className="mb-0"
                        id = "wform"
                        onChange={changeHandler}
                        type="file"
                        accept="/.pdf"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                        />
                        </div>
                        }
                        {workerType == "contractor" &&
                        <div>
                        <FormLabel >Upload W2: </FormLabel>
                        <TextField
                        className="mb-0"
                        id = "wform"
                        onChange={changeHandler}
                        type="file"
                        accept=".pdf"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                        />
                        </div>
                      }

                        {compdriver &&
                        <div>
                        <FormLabel >Upload W2: </FormLabel>
                        <TextField
                        className="mb-0"
                        id = "wform"
                        onChange={changeHandler}
                        type="file"
                        accept=".pdf"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                        />
                        </div>
                      }

                        {show && workerType == "employee" &&
                        <div>
                        <FormLabel >SSN: </FormLabel> 
                        <TextField
                        {...register("ssn")}
                          className="mb-16"
                          autoFocus
                          type="name"
                          error={!!errors.ssn}
                          helperText={errors?.ssn?.message}
                          variant="outlined"
                          required
                          fullWidth
                        /></div>}
     
                <Button variant="contained" color="third" className="w-224 mx-auto mt-48" aria-label="Register" type="submit">
                  Create Driver Account
                </Button>

                <div className="my-0 flex items-center justify-center">
                          <Divider className="w-32" />
                          <span className="mx-8 font-Regular">OR</span>
                          <Divider className="w-32" />
                        </div>
                <Button
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto "
                  aria-label="Register"
                  onClick ={Skip}
                >
                  Do Later
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
 }

export default DriverRegisterThirdStep
