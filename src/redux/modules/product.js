// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// Thunk 코드 작성
const getProductThunk = createAsyncThunk(
  'product/getProduct',
  async (payload, thunkAPI) => {
    return thunkAPI.fulfillWithValue();
  }
)

const initialState = {
  is_loaded: false,
  product: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default productSlice.reducer;
