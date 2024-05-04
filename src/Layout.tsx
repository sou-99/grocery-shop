import Header from './Pages/Header';
import Footer from './Pages/Footer';
import { Outlet } from 'react-router-dom';
const Layout=():JSX.Element=>{
    return(
        <>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
        </>
    )
}
export default Layout;