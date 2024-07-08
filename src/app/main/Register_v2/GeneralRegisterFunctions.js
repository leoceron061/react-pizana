import axios from 'axios';
import { constants } from '../../../constants';

export const verifyToken = async (jwttoken) => {

const response = await axios.get(`${constants.URLLOCAL}/login/verify-token`, {headers:{token:jwttoken}})
const data = await response.data
    
return data


}  


export const generalRegister = async (info) => {

const response = await axios.post(`${constants.URLLOCAL}/register/general`, info)
const data = await response.data
    
return data





}  
