// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api_auth } from '../../shared/api';

// Thunk 코드 작성
export const postbasketThunk = createAsyncThunk(
  'basket/postbasket',
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .post(`/api/item/basket/${payload}`)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData.success);
  }
);

const initialState = {
  is_loaded: false,
  basket: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    addSelectBasket: (state, action) => {
      state.is_loaded = true;
      state.basket = [...state.basket, action.payload];
    },
  },
  extraReducers: (builder) => {},
});

export const { addSelectBasket } = basketSlice.actions;
export default basketSlice.reducer;
