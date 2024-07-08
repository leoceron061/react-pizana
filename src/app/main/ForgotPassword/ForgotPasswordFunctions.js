import axios from 'axios';
import { constants } from '../../../constants';



export const userVerify = async (email) => {

  const response = await axios.post(`${constants.URLLOCAL}/login/userVerify`, {email} )
  const data = await response.data
    if(data == true)
    {
      return true
    }
    else
    {
      return false
    }
    
    //  if(data.email==true && data.invitacion==true){await sendInvitation({email})}
  }  

export const sendReset = async (email) => {
    const response = await axios.post(`${constants.URLLOCAL}/login/sendReset`, email )
    const data = await response.data

    return data
}

export const invitacionVerify = async (email) => {

  const response = await axios.post(`${constants.URLLOCAL}/login/invitacionVerify`, {email} )
  const data = await response.data
  console.log("??????x",data) 
    if(data == false){await sendInvitacion({email})}
    
    
  return data
  
  
  }  

  export const sendInvitacion = async (email) => {
    const response = await axios.post(`${constants.URLLOCAL}/login/sendInvitacion`, email )
    const data = await response.data
    return data
}
export const reset = async (info) => {
    const response = await axios.post(`${constants.URLLOCAL}/login/reset`, info )
    const data = await response.data

    return data
}

export const verifyOTP = async (info) => {
    const otp='otp'
    const response = await axios.post(`${constants.URLLOCAL}/login/verifyOTP`, info )
    const data = await response.data
    return data
}

export const otpvalidacion1 = async (otp) => {
  const response = await axios.post(`${constants.URLLOCAL}/login/otpvalidacion1`, {otp} )
  const data = await response.data
  return data
}
