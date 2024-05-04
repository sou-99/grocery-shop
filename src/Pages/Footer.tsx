import { Box } from "@mui/material";
const Footer=()=>{
    return (
        <Box className="footer-container">
            Grocery @{new Date().getFullYear()}
        </Box>
    )
}
export default Footer;