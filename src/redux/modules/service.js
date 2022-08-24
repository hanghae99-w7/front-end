import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, api_auth } from '../../shared/api';

export const getServiceThunk = createAsyncThunk(
  'service/getServiceList',
  async (payload, thunkAPI) => {
    const resData = await api
      .get('/api/servicecenter')
      .then((res) => res.data.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const postServiceThunk = createAsyncThunk(
  'service/postServiceList',
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .post('/api/servicecenter', payload)
      .then((res) => res.data.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

const initialState = {
	serviceList: [],
};

const service = createSlice({
	name: 'service',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getServiceThunk.fulfilled, (state, action) => {
			state.serviceList = action.payload;
		});
		builder.addCase(postServiceThunk.fulfilled, (state, action) => {
			state.serviceList = [...state.serviceList, action.payload];
		});
	},
});

export default service.reducer;