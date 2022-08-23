// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../shared/api';

// Thunk 코드 작성
export const getItemThunk = createAsyncThunk(
  'item/getItem',
  async (payload, thunkAPI) => {
    const resData = await api.get(
      `/api/iteminfo?page=${payload.page}&size=14&orderby=${payload.orderby}&category=${payload.category}`
    ).then((res) => res.data);
    console.log(resData.data)
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const getSingleItemThunk = createAsyncThunk(
  'item/getSingleItem',
  async (payload, thunkAPI) => {
    console.log(payload);
    const resData = await api
      .get(`/api/iteminfo/${payload}`)
      .then((res) => res);
    console.log(resData.data);
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

const initialState = {
  is_loaded: false,
  item: [],
  detail_is_loaded: false,
  item_single: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItemThunk.fulfilled, (state, action) => {
      state.is_loaded = true;
      console.log(action.payload)
      state.item = [...state.item, ...action.payload];
      console.log(state.item)
    });
    builder.addCase(getSingleItemThunk.fulfilled, (state, action) => {
      state.detail_is_loaded = true;
      state.item_single = action.payload;
    });
  },
});

export default itemSlice.reducer;
