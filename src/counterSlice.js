import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
  datas:[],
  // data1:'',
  // data2:'',
  // email:'',
  // password:''
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setdatas:(state,action)=>{
      state.datas = action.payload
    }
    // setemail:(state,action)=>{
    //   state.data = action.payload
    // },
    // setpassword:(state,action)=>{
    //     state.data1 = action.payload
    //   },
    // setcpassword:(state,action)=>{
    //     state.data2 = action.payload
    //   },

    // displaymail:(state,action)=>{
    //     state.email = action.payload
    // },
    // displaypassword:(state,action)=>{
    //     state.password = action.payload
    // }
  }
})






// Action creators are generated for each case reducer function
export const { increment, decrement,setemail,setpassword,setcpassword ,displaymail,displaypassword,setdatas} = counterSlice.actions


export default counterSlice.reducer
