import axios from 'axios';

import { constants } from '../../../constants';

export const verifyToken = async (jwttoken) => {

    const response = await axios.get(`${constants.URLLOCAL}/login/verify-token`, { headers: { token: jwttoken } })
    const data = await response.data
    console.log("this is the data from the verify-token function:   " + data)
    return data


}

export const login = async (info) => {
    const response = await axios.post(`${constants.URLLOCAL}/login/login`, info)
    const data = await response.data
    console.log("fuuuuuuntiooooooooooooooooon",data);   
    return data
}  

export const verify2FA = async (info) => {
    const response = await axios.post(`${constants.URLLOCAL}/login/verify2FA`, info);
    const data = await response.data;
    return data;
}  

export const logout = async (jwttoken) => {

    const response = await axios.get(`${constants.URLLOCAL}/login/logout`, { headers: { token: jwttoken } })
    const data = await response.data

    return data


}  