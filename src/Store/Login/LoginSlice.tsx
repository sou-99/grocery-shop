import { createSlice } from "@reduxjs/toolkit";
type loginState={
    email:string,
    isLoggedIn:boolean,
}

 const initialState:loginState={
    email:"",
    isLoggedIn:false
}
export const login=createSlice({
    name:"login",
    initialState,
    reducers:{
        setEmailAddress:(state,action)=>{
            state.email=action.payload;
            state.isLoggedIn=true
        },
    }
});
export const {setEmailAddress}=login.actions
export default login.reducer;