// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../shared/api';

export const kakaoAuthThunk = createAsyncThunk(
  'member/kakaoLogin',
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/members/kakao/callback?code=${payload.code}`)
      .then((res) => res);
    window.sessionStorage.setItem(
      'authorization',
      resData.headers['authorization'].split(' ')[1]
    );
    window.sessionStorage.setItem(
      'refresh-token',
      resData.headers['refresh-token']
    );

    return thunkAPI.fulfillWithValue(resData.data.success);
  }
);

const initialState = {
  is_login: false,
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(kakaoAuthThunk.fulfilled, (state, action) => {
      state.is_login = true;
    });
  },
});

export default userSlice.reducer;
