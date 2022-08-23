<<<<<<< HEAD
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



//url 주소 ㅋㅋ
const url = "http://3.39.23.19:8080"

//통신
const initialState = {
  serviceList: [],
};


//기본적인 thunk 틀 : url이 써진 곳이랑 통신을 하겠다는 뜻.
//url 앞 get은 method임
export const getServiceList = createAsyncThunk(
  "getServiceList",
  async (payload,thunkAPI) => {
    try {
      const response = await axios.get("http://3.39.23.19:8080/servicecenter");
      return console.log(response)
      // return thunkAPI.fulfillWithValue(response)
    }
    catch(e){
      return thunkAPI.rejectWithValue(e)
    }
  }
)

//책장 /slice를 모은게 store 
const service = createSlice({
	name: 'serviceList',
	initialState,
	reducers: {},
  extraReducers: {},
});

export const {  } = service.actions;
export default service.reducer;
=======
>>>>>>> master
