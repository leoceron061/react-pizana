import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { constants } from '../../../../constants';

export const getProducts = createAsyncThunk('eCommerceApp/products/getProducts', async () => {
  const response = await axios.get(`${constants.URLLOCAL}/user/all`);
  const data = await response.data;
  return data;
});

export const removeProducts = createAsyncThunk(
  'eCommerceApp/products/removeProducts',
  async (productIds, { dispatch, getState }) => {

    await axios.delete(`${constants.URLLOCAL}/user/${productIds}`, productIds);

    dispatch(getProducts());

    return productIds;
  }
);

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectProducts, selectById: selectProductById } =
  productsAdapter.getSelectors((state) => state.eCommerceApp.products);


function parsear(data) {
  const jsonn = JSON.parse(JSON.stringify(data).replace("id_user", 'id'));
  return jsonn;
}


const productsSlice = createSlice({
  name: 'eCommerceApp/products',
  initialState: productsAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setProductsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {

      const data = action.payload;
      const datos = data.map(parsear);
      productsAdapter.setAll(state, datos);

    },
    [removeProducts.fulfilled]: (state, action) =>
      productsAdapter.removeMany(state, action.payload),
  },

});

export const { setProductsSearchText } = productsSlice.actions;
export default productsSlice.reducer;
