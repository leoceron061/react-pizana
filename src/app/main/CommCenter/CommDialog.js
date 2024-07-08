import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import reducer from './index'
import withReducer from 'app/store/withReducer';
import { showMessage } from 'app/store/fuse/messageSlice';
import {hideControl} from './commSlice'
import {sendComm} from './commFunctions'

/**
 **Form Validation Schema
 **/
 const schema = yup.object().shape({
    type: yup.string().required('You must enter an comm type'),
    message: yup.string().required('You must enter an comm type'),
    subject: yup.string()


  });

function CommDialog() {
  
    const { register,handleSubmit, formState,reset  } = useForm({
      mode: 'onChange',
      resolver: yupResolver(schema),
    });

    const dispatch = useDispatch()
    const comm = useSelector(({ commApp }) => commApp.comm.comm);

  
  

    const [type, setType] = useState('')

    
    async function handleClose () {
      dispatch(hideControl())

    }

   
    async function onSubmit(data) {
        console.log(data)
        console.log(comm.recipients)
        const {type,message,subject} = data
        const send_to = comm.recipients     
        const result = await sendComm({send_to,type,message,subject}) 
        console.log(result)
        if(result.data.answer)
        {
          dispatch(   
            showMessage({
            message     : (
              "Message Sent!"
            ),//text or html
            autoHideDuration: 6000,//ms
            anchorOrigin: {
              vertical  : 'top',//top bottom
              horizontal: 'right'//left center right
            },
            variant: 'success'//success error info warning null
          }))
        }  

        else 
        {
          await Promise.all(
            result.data.issues.map(async(instance) => {

              dispatch(   
                showMessage({
                message     : (
                  `Could not send message to: ${instance.user_fname} ${instance.user_lname}`
                ),//text or html
                autoHideDuration: 60000,//ms
                anchorOrigin: {
                  vertical  : 'top',//top bottom
                  horizontal: 'right'//left center right
                },
                variant: 'error'//success error info warning null
              }))

            })
            

          )
        }
    }

    
  
    return (
      <Dialog {...comm.props} onClose={handleClose} fullWidth maxWidth="sm" scroll="body">

        <AppBar position="static" elevation={0}>
          <Toolbar className="flex w-full">
            Send Message
          </Toolbar>
        </AppBar>

        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent classes={{ root: 'p-0' }}>
            <div className="mb-16">
              <div className="flex items-center justify-between p-12">
                <div className="flex items-center justify-start">
                  
                
                </div>
              </div>
           </div>
  
           <div className="px-16 sm:px-24">
           <FormControl className="mt-8 mb-16" required fullWidth>
              <InputLabel id="select-label">Type</InputLabel>
                  
                <Select
                {...register("type")}
                  labelId="select-label"
                  label="Type"
                  value = {type}
                  onChange={(e) => {setType(e.target.value)}}
                  autoFocus
                  required
                  variant="outlined"
                >
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="text">Text</MenuItem>

                </Select>
            </FormControl>

            {type == 'email' ? 
            <FormControl className="mt-8 mb-16" required fullWidth>
              <TextField
                      {...register("subject")}
                      className="mb-16"
                      label="Subject"
                      variant="outlined"
                      required
                      fullWidth
                    />
            </FormControl>
            :null}
  
            <FormControl className="mt-8 mb-16" required fullWidth>

            <TextField
                    {...register("message")}
                    className="mb-16"
                    label="Message"
                    variant="outlined"
                    multiline
                    fullWidth
                />
            
            </FormControl>

               
                <Button 
                  variant="contained"
                  color="primary"
                  className="w-224 mx-auto mt-16"
                  aria-label="Resend"
                  type="submit"
                >
                  Send Message
                </Button>
              



            </div>
          </DialogContent>
        </form>
      </Dialog>
    );
}

export default withReducer('commApp', reducer)(CommDialog);
