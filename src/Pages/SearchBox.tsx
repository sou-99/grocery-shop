import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
interface searchProps {
    handleFilter:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    seachClick:(val:string)=>void
    }
const SearchBox = ({handleFilter,seachClick}:searchProps): JSX.Element => {
    const [search,setSearch]=useState<string>("")
    const searchHandler=():void=>{
        seachClick(search)
    }
    return (
        <Box className="search">
            <TextField
                label="Search:"
                variant="outlined"
                type="search"
                value={search}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setSearch(e.target.value)
                    console.log("test--", typeof e.target.value)
        handleFilter(e)

                }}
                size="small"
                placeholder="Type the name of item eg: rice"
            />
            <Button variant="contained" onClick={() => searchHandler()}>Search</Button>
        </Box>
    )
}

export default SearchBox;