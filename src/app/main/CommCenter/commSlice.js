import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const commAdapter = createEntityAdapter({});

const commSlice = createSlice({
  name: 'commApp/info',
  initialState: commAdapter.getInitialState({
    comm : {
      recipients : null,
      props :{
        open: false,
    }
  }
  }),
  reducers: {
    showControl: (state, action) => {
      state.comm = {
        recipients: action.payload,
        props: {
          open: true,
        },
      };
    },
    hideControl: (state, action) => {
      state.comm = {
        recipients: null,
        props: {
          open: false,
        },
      };
    },
  },
  
});

export const {
    showControl,
    hideControl

  } = commSlice.actions;
  
  export default commSlice.reducer;

  //example in DriverList/DriverMultiSelectMenu.js
  //must add Dialog to MultiSelectMenu
  //and dispatch showControl with the selected row ids
  