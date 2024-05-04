import { Box } from "@mui/material"
import { UseSelector, useSelector } from "react-redux";
import { storeType } from "../Store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
let id:ReturnType<typeof setInterval>;
let cnt=0;
const Header=()=>{
    const {cart}=useSelector((state:storeType)=>state.grocery)
    const {isLoggedIn}=useSelector((state:storeType)=>state.login)
    const navigate=useNavigate();
    useEffect(()=>{
        if(cart.length>0){
            clearInterval(id)
        id=setInterval(()=>{
            let st=document.getElementsByClassName("cart-icon")
            if(st){
                if(cnt==0){
                    st[0].classList.remove("shake")
                }
                cnt+=1;
                if(cnt===10){
                    st[0].classList.add("shake")
                }
                if(cnt>10){
                    cnt=0;
                }
                // }
                // else{
                    // cnt+=1;
                // }
            }else{
                clearInterval(id);
            }
            // console.log("test--",st.classList)
            // ?.style?.animation-play-state;
        
        },1000)
    }},[cart.length])
    return (
        <Box className="header-container">
            <img src={require('../assests/images/icon.png')} className="header-icon"/>
            <p className="header-text">Grocery Shop</p>
            {isLoggedIn && <img src={require("../assests/images/basket.png")} id="cart" onClick={()=>navigate("carts")} className={`header-icon cart-icon ${cart.length>0 && "shake"}`}></img>}
        </Box>
    )
}
export default Header;