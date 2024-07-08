import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';
import { constants } from '../../../../constants';
// import store from '../../ID_store/store'
// import Check_refresh from '../../../Check_refresh' 

export const getProduct = createAsyncThunk('eCommerceApp/product/getProduct', async (params) => {
  const response = await axios.get(`${constants.URLLOCAL}/user/${params.productId}/${params.productName}`, params);
  const data = await response.data;
  return data === undefined ? null : data;

});

export const removeProduct = createAsyncThunk(
  'eCommerceApp/product/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().eCommerceApp.product;
    await axios.post(`${constants.URLLOCAL}/user`, { id });
    return id;
  }
);

export const saveProduct = createAsyncThunk(
  'eCommerceApp/product/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { product } = getState().eCommerceApp;

    await Check_refresh()
    const {id} = store.getState()
    productData.company_id=id

    const response = await axios.post(`${constants.URLLOCAL}/user/`, {
      ...product,
      ...productData,
    });
    const data = await response.data;

    return data;
  }
);


export const editProduct = createAsyncThunk(

  'eCommerceApp/product/editProduct',
  async (val, { dispatch, getState }) => {
    await axios.put(`${constants.URLLOCAL}/user/${val.id}`, val);
    return val;
  }
);

const productSlice = createSlice({
  name: 'eCommerceApp/product',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id_user: 0,
          client_id: 0,
          nombrecliente: '',
          apellidocliente: '',
          nombre_caso: '',
          telefono: '',
          genero: '',
          email: '',
          contrasena: '',
          fechacumpleanos: '',
          fechacreacion: null,
          descripcion_caso: '',
          fk_hojaazul: null,
          fk_hojaamarilla: null,
          fk_hojaroja: null,
          fk_hojarosada: null,
          fk_hojanaranja: null,
          fk_docs: null,
          fechaactualizacion: null,
          logged_in: null,
          reg_step: null,
          otp: null,
          user_type: null,
          comm_pref: null,
          user_faflag: null,
          user_fasecret: null,
          nombreactanac: '',
          fechannac: '',
          etnicidad: '',
          raza: '',
          estatura: '',
          peso: '',
          colorojos: '',
          colorcabello: '',
          numeropasaporte: '',
          pais: '',
          nombremadre: '',
          nombrepadre: '',
          dirmadre: '',
          dirpadre: '',
          fechanacmadre: '',
          fechanacpadre: '',
          nompadrastro: '',
          nommadrastra: '',
          dirmadrastra: '',
          dirpadrastro: '',
          lugarnacimiento: ''

        },
      }),
    },
  },
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => action.payload,
    [editProduct.fulfilled]: (state, action) => action.payload,
    [saveProduct.fulfilled]: (state, action) => action.payload,
    [removeProduct.fulfilled]: (state, action) => null,
  },
});


export const { newProduct, resetProduct } = productSlice.actions;

export default productSlice.reducer;
