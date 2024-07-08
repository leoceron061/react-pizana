import { createStore } from "redux";

const initialState = {
  //add admin flag
  nombrecliente:'',
  email:'',
  id_user: "",
  // comp_acct: "",
  photo: "",
  // settings: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        nombrecliente: action.payload?.nombrecliente,
        email: action.payload?.email,
        id_user: action.payload.id_user,
        // comp_acct: action.payload?.compacct,
        // settings: action.payload?.settings,
      };
    }
    case "LOG_OUT": {
      return { ...state, nombrecliente:"", email:"" ,id_user: "" };
    }
    case "PHOTO": {
      return { ...state, photo: action.payload.photo };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
