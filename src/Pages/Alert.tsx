import * as React from 'react';
import Alert from '@mui/material/Alert';
import { useOutletContext } from 'react-router-dom';
type msgType={
    msg:string
}
const AlertMsg =():JSX.Element=>{
    const {msg}:msgType=useOutletContext()
    console.log("alert--",msg)
    return (
    <Alert severity="success">
        {msg}
    </Alert>
    )
}
export default AlertMsg;