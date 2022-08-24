import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, api_auth } from '../../shared/api';

//기본적인 thunk 틀 : url이 써진 곳이랑 통신을 하겠다는 뜻.
//url 앞 get은 method임
export const getServiceThunk = createAsyncThunk(
  'service/getServiceList',
  async (payload, thunkAPI) => {
    const resData = await api
      .get('/api/servicecenter')
      .then((res) => res.data.data);
    console.log(resData);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const postServiceThunk = createAsyncThunk(
  'service/postServiceList',
  async (payload, thunkAPI) => {
    const headers = {
      authorization: `Bearer ${window.sessionStorage.getItem('authorization')}`,
      'refresh-token': `${window.sessionStorage.getItem('refresh-token')}`,
    };
    const resData = await api
      .post('/api/servicecenter', payload, {
        headers,
      })
      .then((res) => res.data.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

const initialState = {
  serviceList: [],
};

//책장 /slice를 모은게 store
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
