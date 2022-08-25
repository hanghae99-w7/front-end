// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api_auth } from '../../shared/api';

// Thunk 코드 작성
export const getBasketThunk = createAsyncThunk(
  'basket/getBasket',
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .get(`/api/item/basket`)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const postBasketThunk = createAsyncThunk(
  'basket/postBasket',
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .post(`/api/item/basket/${payload}`)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const deleteBasketThunk = createAsyncThunk(
  'basket/deleteBasket',
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .delete(`/api/item/basket/${payload}`)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

const initialState = {
  is_loaded: false,
  basket: [],
  total_price: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    clearBasketAction: (state, action) => {
      state.is_loaded = false;
      state.basket = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBasketThunk.fulfilled, (state, action) => {
      state.is_loaded = true;
      state.basket = action.payload;
      state.total_price = 0;
      state.basket.forEach((basket) => {
        state.total_price += basket.price;
      });
    });
    builder.addCase(postBasketThunk.fulfilled, (state, action) => {
        state.basket = [...state.basket, action.payload.data];
        state.total_price += action.payload.data.price;
    });
    builder.addCase(deleteBasketThunk.fulfilled, (state, action) => {
      state.basket = state.basket.filter((bas) => bas.baskietId !== action.payload.baskietId)
  });
  },
});

export const { addSelectBasket, clearBasketAction } = basketSlice.actions;
export default basketSlice.reducer;
