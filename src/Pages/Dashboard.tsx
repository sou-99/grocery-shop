import { useState } from "react";
import SideFilter from "./SideFilter";
import SearchBox from "./SearchBox";
import { Box } from "@mui/material";
import Groceries from "./Groceries";
const Dashboard=():JSX.Element=>{
    const [filter,setFilter]=useState<string>("")
    const handleFilter=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setFilter(e.target?.value)
    }
    const resetHandler=()=>setFilter("")
    const seachClick=(val:string):void=>setFilter(val)
return (
    <Box className="dashboard">
    <SideFilter filter={filter} handleFilter={handleFilter} resetHandler={resetHandler}/>
    <SearchBox handleFilter={handleFilter} seachClick={seachClick}/>
    <Groceries filter={filter}/>
    </Box>
)
}
export default Dashboard;