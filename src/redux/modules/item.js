// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../shared/api';

// Thunk 코드 작성
export const getItemThunk = createAsyncThunk(
  'item/getItem',
  async (payload, thunkAPI) => {
    console.log(payload);
    const resData = await api.get(
      `/api/iteminfo&page=${payload.page}?size=14&orderby=${payload.orderby}&category=${payload.category}`
    ).then((res) => res.data);
    console.log(resData);
    return thunkAPI.fulfillWithValue(resData);
  }
);

const initialState = {
  is_loaded: false,
  item: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItemThunk.fulfilled, (state, action) => {
      state.is_loaded = true;
      console.log(action.payload);
      state.item = action.payload;
    });
  },
});

export default itemSlice.reducer;
