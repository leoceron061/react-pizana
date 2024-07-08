import { combineReducers } from '@reduxjs/toolkit';
import comm from './commSlice';

const reducer = combineReducers({
  comm
});

export default reducer;
