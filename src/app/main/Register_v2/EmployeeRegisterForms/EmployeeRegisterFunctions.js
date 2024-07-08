import axios from 'axios';
import { constants } from '../../../../constants';


export const checkLinkCode = async (code) => {
    const response = await axios.post(`${constants.URLLOCAL}/invitation/invite-code`,{code})
    const data= await response.data
    
    return data

    
   
  }

export const changeInviteFlags = async (info) => {

const response = await axios.post(`${constants.URLLOCAL}/invitation/invite-flags`, info)
const data = await response.data
const {id} = data.user_id
return id


}  

export const resendInvite = async (code) => {

  const response = await axios.post(`${constants.URLLOCAL}/invitation/resend`, {code})
  const data = await response.data
      
  return data
  
  
  }  


export const sendOTP = async (info) => {

  const response = await axios.post(`${constants.URLLOCAL}/invitation/sendotp`, info)
  const data = await response.data
      
  return data
  
  
  }  

export const verifyOTP = async (info) => {

  const response = await axios.post(`${constants.URLLOCAL}/invitation/verifyotp`, info)
  const data = await response.data
      
  return data
  
  
  }  


export const token = async (id) => {

const response = await axios.post(`${constants.URLLOCAL}/login/token`, {id})
const data = await response.data
const {token} = data
return token


}  


export default {checkLinkCode,changeInviteFlags,resendInvite}