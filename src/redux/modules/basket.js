// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../shared/api';

// Thunk 코드 작성
export const getbasketThunk = createAsyncThunk(
  'basket/getbasket',
  async (payload, thunkAPI) => {
    const resData = await api.get(
      `/api/item/basket/${payload}`
    ).then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

const initialState = {
  is_loaded: false,
  basket: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getbasketThunk.fulfilled, (state, action) => {
      state.is_loaded = true;
      state.item = [...state.item, ...action.payload];
    });
  },
});

export default basketSlice.reducer;
