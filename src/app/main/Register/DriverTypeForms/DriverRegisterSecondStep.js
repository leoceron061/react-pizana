import FormHelperText from '@mui/material/FormHelperText';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import {useHistory,useParams } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import {constants} from '../../../../constants'

import React, {useState} from 'react'
import Camera from '../Utils/Camera'
import Divider from '@mui/material/Divider';



/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  driverLicense: yup.string().required('You must enter your Driver license number'),
  cdlLicense: yup.string().required('You must enter your CDL number'),
  cdlIssued: yup.string().required('You must enter your CDL number'),
  cdlExpire: yup.string().required('You must enter your CDL number'),
});



function DriverRegisterSecondStep() {
  
  const { register, formState:{errors}, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });



  const routeParams= useParams()//to access url variable
  let history = useHistory(); // used to redirect after submit
  const [selectedFileDL, setSelectedFileDL] = useState(null)
  const [selectedFileCDL, setSelectedFileCDL] = useState(null)
  const [selectedFileInsurrance, setSelectedFileInsurrance] = useState(null)


  const changeHandlerDL = (event) => {
    if(imageDLTaken){
      deleteImageDL() 
      setSelectedFileDL(event.target.files[0])}
		else{setSelectedFileDL(event.target.files[0]);}
	};
  const changeHandlerCDL = (e) => {
    if(imageTaken){
      deleteImage() 
      setSelectedFileCDL(e.target.files[0])}
      else
		{setSelectedFileCDL(e.target.files[0]);}
              }

  const changeHandlerInsurrance = (event) => {
    if(imageInsTaken){
      deleteImageIns()
      setSelectedFileInsurrance(event.target.files[0])}
      else{
		setSelectedFileInsurrance(event.target.files[0]);}
	};
  
  
  
  


  const onSubmitForm =  async (data) => {
    try {
      console.log(routeParams.id +"-"+routeParams.type)
      console.log(data)
      console.log(selectedFileDL)
      console.log(selectedFileCDL)//Amazon S3, come back later
      console.log(selectedFileInsurrance)

      //remember to add tehe pictures later

      const {driverLicense,cdlLicense,cdlIssued,cdlExpire} = data
      const {id,type,step} = routeParams
      const body = {id,type,step,driverLicense,cdlLicense,cdlIssued,cdlExpire }

      const response = await fetch(`http://${constants.URLLOCAL}:5000/auth/register-type`, 
            {method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body)
          })

      const parseRes = await response.json()
      if(parseRes === true){
        history.replace(`/${routeParams.id}/usr-type/${routeParams.type}/3`)}
      else{console.log(parseRes)}

    } 
    catch (err) {
      console.error(err.message)}
  }


////////////////////////////////////////////////image capture for DL
const refDL = React.createRef()//ref for camera

const [takeDLPic, setTakeDLPic] = useState(false)//thye want to take a pic
  const [imageDLTaken, setImageDLTaken] = useState(false)//render delete button and image taken
  const [imageDL, setImageDL] = useState()//the picture they take
  
  const captureDL = () => {//takes picture and saves it to state
    document.getElementById("myFiledl").value = null//clears the file chosen
    const pictureDL = refDL.current.getScreenshot()
    setImageDL(pictureDL)
    setSelectedFileDL(pictureDL)
    setTakeDLPic(false)//close camera
    setImageDLTaken(true)//to display image
    
  }

  const deleteImageDL = () => {//removes picture and not show button or image
    setImageDLTaken(false)
    setImageDL(null)
    setSelectedFileDL(null)

  }


//////////////////////////////////////////////////////

  ////////////////////////////////////////////////image capture for CDL
const ref = React.createRef()//ref for camera

const [takePic, setTakePic] = useState(false)//thye want to take a pic
const [imageTaken, setImageTaken] = useState(false)//render delete button and image taken
const [image, setImage] = useState()//the picture they take
  
  const  capture = () => {//takes picture and saves it to state
    document.getElementById("myFilecdl").value = null//clears the file chosen
    const picture = ref.current.getScreenshot()
    setImage(picture)//
    setSelectedFileCDL(picture)
    setTakePic(false)//close camera
    setImageTaken(true)//to display image
  }

  const deleteImage = () => {//removes picture and not show button or image
    setImageTaken(false)
    setImage(null)
    setSelectedFileCDL(null)
  }
//////////////////////////////////////////////////////

/////////////////////////////////////////////////////image capture for insurance
const refIns = React.createRef()//ref for camera

const [takeInsPic, setTakeInsPic] = useState(false)//thye want to take a pic
  const [imageInsTaken, setImageInsTaken] = useState(false)//render delete button and image taken
  const [imageIns, setImageIns] = useState()//the picture they take
  
  const captureIns = () => {//takes picture and saves it to state
    document.getElementById("myFileins").value = null//clears the file chosen
    const pictureIns = refIns.current.getScreenshot()
    setImageIns(pictureIns)
    setSelectedFileInsurrance(pictureIns)
    setTakeInsPic(false)//close camera
    setImageInsTaken(true)//to display image
    
  }

  const deleteImageIns = () => {//removes picture and not show button or image
    setImageInsTaken(false)
    setImageIns(null)
    setSelectedFileInsurrance(null)

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



///////////////////////////////////////////////////////

  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/stah_logo2.png" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-Regular text-18 sm:text-24">
                Driver Step 2 of 3
              </Typography>

              <form
                name="registerForm"
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmitForm)}
              >
            
                    <TextField
                    {...register("driverLicense")}
                      className="mb-16"
                      label="DL#"
                      autoFocus
                      type="name"
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />

                    <TextField
                    {...register("cdlLicense")}
                      className="mb-16"
                      label="CDL#"
                      autoFocus
                      type="name"
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                    
                        <FormLabel >CDL Issue Date: </FormLabel>
                        <TextField
                    {...register("cdlIssued")}
                      className="mb-16"
                      autoFocus
                      type="date"
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                        <FormLabel >CDL Expire Date: </FormLabel>
                        <TextField
                    {...register("cdlExpire")}
                      className="mb-16"
                      autoFocus
                      type="date"
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />

                        <FormLabel >Driver License photo: </FormLabel>
                        <TextField
                        className="mb-0"
                        onChange={changeHandlerDL}
                        type="file"
                        id="myFiledl"
                        accept="image/*"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                         /*the required field will be checked in API*/
                        fullWidth
                        />   
                        <div className="my-0 flex items-center justify-center">
                          <Divider className="w-32" />
                          <span className="mx-8 font-Regular">OR</span>
                          <Divider className="w-32" />
                        </div>

                      {/*opens camera*/}
                        <Button variant="outlined" className="w-224 mx-auto " onClick={()=>{setTakeDLPic(true)}}> Take Image</Button> 
                        { //if they want to taek a picture show the camera
                          takeDLPic && <Camera  ref={refDL}  handleClick = {captureDL} setTakePic={setTakeDLPic} />
                        }
                        
                        {//if they did take a picture display it 
                          imageDLTaken && <div><img src={imageDL} alt="picture" /></div>
                        }
                        {//if they did take a picture show the button
                          imageDLTaken && <Button className="w-224 mx-auto " variant="outlined" onClick={deleteImageDL}> Delete </Button> 
                        }      
                  


                

                  
                  <FormLabel >CDL photo: </FormLabel>
                        <TextField
                        className="mb-0"
                        id = "myFilecdl"
                        onChange={changeHandlerCDL}
                        type="file"
                        accept="image/*"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        /*the required field will be checked in API*/
                        fullWidth
                        />
                        <div className="my-0 flex items-center justify-center">
                          <Divider className="w-32" />
                          <span className="mx-8 font-Regular">OR</span>
                          <Divider className="w-32" />
                        </div>

                         {/*opens camera*/}
                         <Button variant="outlined" className="w-224 mx-auto" onClick={()=>{setTakePic(true)}}> Take Image</Button> 
                        { //if they want to taek a picture show the camera
                          takePic && <Camera  ref={ref}  handleClick = {capture} setTakePic={setTakePic} />
                        }
                        
                        {//if they did take a picture display it 
                          imageTaken && <div><img src={image} alt="picture" /></div>
                        }
                        {//if they did take a picture show the button
                          imageTaken && <Button className="w-224 mx-auto " variant="outlined" onClick={deleteImage}> Delete </Button> 
                        }

                        <FormLabel >Insurrance photo: </FormLabel>
                        <TextField
                        className="mb-0"
                        onChange={changeHandlerInsurrance}
                        type="file"
                        id="myFileins"
                        accept="image/*"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                         /*the required field will be checked in API*/
                        fullWidth
                        />   
                        <div className="my-0 flex items-center justify-center">
                          <Divider className="w-32" />
                          <span className="mx-8 font-Regular">OR</span>
                          <Divider className="w-32" />
                        </div>

                      {/*opens camera*/}
                        <Button variant="outlined" className="w-224 mx-auto " onClick={()=>{setTakeInsPic(true)}}> Take Image</Button> 
                        { //if they want to taek a picture show the camera
                          takeInsPic && <Camera  ref={refIns}  handleClick = {captureIns} setTakePic={setTakeInsPic} />
                        }
                        
                        {//if they did take a picture display it 
                          imageInsTaken && <div><img src={imageIns} alt="picture" /></div>
                        }
                        {//if they did take a picture show the button
                          imageInsTaken && <Button className="w-224 mx-auto " variant="outlined" onClick={deleteImageIns}> Delete </Button> 
                        }      
                  


                

                <Button
                  variant="contained"
                  color="third"
                  className="w-224 mx-auto mt-16"
                  aria-label="Register"
                  type="submit"
                >
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

export default DriverRegisterSecondStep
