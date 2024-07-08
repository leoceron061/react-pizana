import axios from 'axios';
import { constants } from '../../../constants';

export const sendComm = async (info) => {
    const result = await axios.post(`${constants.URLLOCAL}/comm/multi`, info);
    console.log(result)
    return result
}

