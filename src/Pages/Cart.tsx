import { Box, Button } from "@mui/material";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { items } from "../JSONData/data";
import { storeType } from "../Store";
import { Outlet, useNavigate } from "react-router-dom";
import { addExtra } from "../Store/Grocery/GrocerySlice";
import React from "react";
import SimpleBackdrop from "./Backdrop";

const Cart=():JSX.Element=>{
    const {cart}=useSelector((state:storeType)=>state.grocery)
    const {email}=useSelector((state:storeType)=>state.login)
    const [open, setOpen] = React.useState(false);
    const [flag,setFlag] = React.useState(false)
    let severity="success"
    const handleClose = ():void => {
      setOpen(false);
    };
    const handleOpen = ():void => {
      setOpen(true);
    };
  
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const addHandler=(x:{opt:"add" | "delete",item:items})=>{
        dispatch(addExtra(x))
    }
    const handleBuy=():void=>{
        handleOpen()
        setTimeout(()=>{
            handleClose();
            navigate(`buy/${severity}`)
            setFlag(true)
        },30000)
    }
    return(
        <>
        {open && <SimpleBackdrop open={open} handleOpen={handleOpen}/>}
        <Outlet context={{msg:"Order Placed Successfully."}}/>
        <Box className="cart-button">
        <Button variant="contained" onClick={()=>navigate(`/dashboard/${email}`)}>Go Back</Button>
        <Button variant="contained" onClick={()=>handleBuy()} disabled={flag}>Buy Items</Button>
        </Box>
        <Box className="cart-container">
            {cart.map((item: items) =>
                <div className="Grocery-Items">
                    <img src={item.img} className="grocery-img" />
                    <strong>{item.name}{"  "} @{item.brand}, {" "}{item.price} for {item.quantity}</strong>
                    <div className="cartOpt">
                    <Button variant="contained" disabled={flag} onClick={() =>addHandler({opt:"delete",item})} className='item-buttons'>-</Button>
                    {item.qty}
                    <Button variant="contained" disabled={flag} onClick={() =>addHandler({opt:"add",item})} className='item-buttons'>+</Button>
                    </div>
                </div>)
            }
            {cart.length == 0 && <>No Product Available.</>}
        </Box>
        </>
    )
}
export default Cart;