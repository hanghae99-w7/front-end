import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



//url 주소 ㅋㅋ
const url = "http://3.39.23.19:8080"

//통신
const initialState = {
  serviceList: [],
};


// 1. 책장 만들기 (createSlice)
// 2. 주문서 작성하기 (createAsyncThunk)를 만들어주기.
// 3. 주문하기 (useEffect) 이용해서 dispatch로 함수를 실행해준다. 이 함수는 주문서 작성하기의 함수임
// 3-1 주문을 했으니 답이 오겠지? 그럼 그 답을 console로 확인해서 내가 뽑아올 데이터를 확인해준다
// 4. 확인을 했으면 그 데이터를 책장으로 보내주기 위해 fulfillwithvalue를 이용해준다.

// 5. extraReducer를 이용해서 내 책장에 꽂아준다.
// 6. useSlector를 이용해서 책장에서 책을 꺼내준다.



// [2] 책장을 채우기위해 주문을 한다. (이게 통신임)/ 18-32통신하는 방법임
//24번줄이 젤 중요함

//기본적인 thunk 틀 : url이 써진 곳이랑 통신을 하겠다는 뜻.
//url 앞 get은 method임 . get에는 url 하나만 넣으셈 
export const getServiceList = createAsyncThunk(
  "getServiceList",
//  payload [2] 1의 페이로드가 여기로 와서 payload 가 됨. 이제 어느곳에서나 쓸수 있음.
  async (payload,thunkAPI) => {
    try {
      // , 백엔드가 원하는 데이터/request/
      const response = await axios.get(`http://3.39.23.19:8080/api/servicecenter/${payload}` );
     //1. 데이터 구성 확인용
     // return console.log(response)
     //2. 데이터 구성 확인 후 필요한 데이터를 넣어주기. 우리가 작성할 extraReducers의 payload값이 될 예정

      return thunkAPI.fulfillWithValue(response.data)
    }
    catch(e){
      return thunkAPI.rejectWithValue(e)
    }
  }
)




// [1] 책장 틀(slice)을 만들어줌/ extraRe 비워둔 상태
//책장 /slice를 모은게 store 
const service = createSlice({
	name: 'serviceList',
	initialState,
	reducers: {},
  //3. 
  extraReducers: {
    // 3가지는 default. fulfilled, rejected, pending 걍 외워 ㅋㅋ
    // 25번째 줄 action payload가 됨
    // state는 여기 있는 slice 전부를 뜻함.
  [getServiceList.fulfilled] : (state,action) => {
    //action.payload는 fulfillWithValue() 25번 괄호 안에있는 값
    //서버에서 가져와서 꽂아주는 것 까지 된거임 ㅋㅋ/ reducer에 저장한거!
    state.serviceList = action.payload

  }
  // 서버 통신이 실패할 경우 rejected로 들어감
  // [getServiceList.rejected]
  // 아직 fulfilled 도 아니고 rejected도 아닌 내가 진행하고있는 상태.
  //(로딩창. 문을 두드리기 전 상황) loading을 처리하기 위함. 현재는 필요하지 않음.
  // [getServiceList.pending]
  },
});

export const {  } = service.actions;
export default service.reducer;