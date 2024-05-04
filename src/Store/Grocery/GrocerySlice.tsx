import { createSlice } from "@reduxjs/toolkit";
import { groceryData } from "../../JSONData/data";
import { items } from "../../JSONData/data";

type grocery={
    groceryData:typeof groceryData,
    filter:string
    cart:items[]
}
const initialState:grocery={groceryData,filter:"",cart:[]};
const GrocerySlice=createSlice({
    name:"grocery",
    initialState,
    reducers:{
        filterItem:(state,action)=>{
            state.filter=action.payload;
    },
    addToCart:(state,action)=>{
        let carts:items[]=[...state.cart]
        let index:number=carts.findIndex((g)=>g?.name===action.payload.name)
        if(index!=-1){
            carts[index]={...carts[index],qty:(carts[index]?.qty??0)+1}
        }else{
            carts.push({...action.payload,qty:1})
        }
        state.cart=[...carts]
    },
    addExtra:(state,action)=>{
        let carts:items[]=[...state.cart]
        let index:number=carts.findIndex((g)=>g?.name===action.payload.item.name)
        if(action.payload.opt=="add"){
            // if(index!=-1){
                carts[index]={...carts[index],qty:(carts[index]?.qty??0)+1}
        }else{
            // if(index!=-1){
                carts[index]={...carts[index],qty:(carts[index]?.qty??0)-1}
            // }else{
                if(carts[index].qty==0){
                carts=carts.filter((g)=>g.qty!==0)
                }
            // }
       
        }
        state.cart=[...carts]
    }
    }
})
export const {filterItem,addToCart,addExtra}=GrocerySlice.actions;
export default GrocerySlice.reducer;