import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Button } from '@mui/material';
interface Labels{
    label:string,
    value:string,
}
interface Filter extends Labels{
    
    subSection?:Labels[]
}
const filters:Filter[]=[
    {label:"Rice",value:"rice"},
    {label:"Oil",value:"oil",subSection:[{label:"Skin care",value:"skinCare"},{label:"Cooking Oil",value:"cooking"}]},
    {label:"Masalas",value:"masala"},
    {label:"Vegetables",value:"vegetable"},
    {label:"Breakfast Items",value:"breakfast"},

]
interface filterProps {
filter:string,
handleFilter:(e:React.ChangeEvent<HTMLInputElement>)=>void,
resetHandler:()=>void
}

const SideFilter=({filter,handleFilter,resetHandler}:filterProps):JSX.Element=>{
return (
    <>
    <Box className="sidebar-container">
    <p id="demo-radio-buttons-group-label" className='bg-color'><strong>Groceries</strong></p>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleFilter(e)}
        value={filter}
        className='padding-1rem'
      >
        {filters.map((item)=>
        <>
        <FormControlLabel value={item.value} control={<Radio />} label={item.label} />
        {item?.subSection && item?.subSection.map((i)=><FormControlLabel sx={{marginLeft:"2rem"}} value={i.value} control={<Radio />} label={i.label} />)}
        </>)}
    <Button variant="contained" onClick={() => resetHandler()} className='reset-btn'>Reset</Button>
      </RadioGroup>
    </FormControl>
    </Box> 
    </>

)
}
export default SideFilter;