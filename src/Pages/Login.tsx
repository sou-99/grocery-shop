import { TextField, Box , Button} from "@mui/material";
import React,{useState} from 'react'
import { UseSelector,useDispatch, useSelector } from "react-redux";
import { storeType } from "../Store";
import { setEmailAddress } from "../Store/Login/LoginSlice";
import { Outlet, useNavigate } from "react-router-dom";
const Login = () => {
    const [email,setEmail]=useState<string>("")
    // const {email}=useSelector((state:storeType)=>state.login)
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const loginHandler=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        if(email.includes("@")){
            dispatch(setEmailAddress(email))
            navigate(`dashboard/${email}`)
        }
    }
    return (
        <Box className="login-container">
            <Box className="login-section">
            <Box className="login-header">User Login</Box>
                <Box className="login-fields">
                    <TextField
                        label="Email Address:"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                            console.log("test--",typeof e.target.value)
                        }}
                    />
            {/* <Outlet/> */}
                    <Button variant="contained" onClick={(e)=>loginHandler(e)}>Login</Button>
                </Box>
            </Box>
        </Box>
    )
}
export default Login;