import axios from 'axios';
import { constants } from '../../../../constants';


export const sendOTP = async (info) => {

  const response = await axios.post(`${constants.URLLOCAL}/login/sendotp`, info )
  const data = await response.data
      
  return data
  
  
  }  

export const verifyOTP = async (info) => {

  const response = await axios.post(`${constants.URLLOCAL}/login/verifyotp`, info)
  const data = await response.data
      
  return data
  
  
  }  

export const employeeVerify = async (contact_info) => {

  const response = await axios.post(`${constants.URLLOCAL}/login/employeeVerify`, {contact_info})
  const data = await response.data
      
  return data
  
  
  }  
export const getId = async (email) => {

    const response = await axios.post(`${constants.URLLOCAL}/login/getid`, {email})
    const data = await response.data
    const {user_id} = data
    return user_id
    
    
    }  

export const token = async (id) => {

const response = await axios.post(`${constants.URLLOCAL}/login/token`, {id})
const data = await response.data
const {token} = data
return data


}  



