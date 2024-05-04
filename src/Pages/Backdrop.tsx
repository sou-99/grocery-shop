import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
type BackdropProps={
    handleClose?:()=>void,
    handleOpen:()=>void,
    open:boolean
}

export default function SimpleBackdrop({handleClose,handleOpen,open}:BackdropProps):JSX.Element {

  return (
    <div>
      {/* <Button onClick={()=>handleOpen()}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={()=>handleClose()}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
