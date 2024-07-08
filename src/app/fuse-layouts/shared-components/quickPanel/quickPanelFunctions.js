import { constants } from '../../../../constants';
import axios from 'axios'
import store from '../../../main/ID_store/store'


export const updateSettings = async (info) => {
    const result = await axios.post(`${constants.URLLOCAL}/props/update-settings`, info);
    console.log(result.data.settings)
    const compacct = store.getState().comp_acct
    const id = store.getState().id
    const settings = result.data.settings
    store.dispatch({type: 'LOG_IN', payload: {compacct,id,settings}})
    console.log(store.getState())
}