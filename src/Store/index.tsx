import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Login/LoginSlice";
import GrocerySlice from "./Grocery/GrocerySlice";
import logger from 'redux-logger';
const store=configureStore({
    reducer:{
        login:LoginSlice,
        grocery:GrocerySlice
    },
middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
export {store};
export type storeType=ReturnType<typeof store.getState>