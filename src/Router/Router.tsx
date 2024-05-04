import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboards from "../Pages/Dashboard";
import Cart from "../Pages/Cart";
import Layout from "../Layout";
import AlertMsg from "../Pages/Alert";
const Router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route  index element={<Login/>}></Route>
        <Route path="dashboard/:userId" element={<Dashboards/>}></Route>
        <Route path="carts" element={<Cart/>}>
            <Route path="buy/:severity" element={<AlertMsg/>}></Route>
        </Route>
    </Route>
))


const AllRoutes=()=>{
    return(
        <RouterProvider router={Router}/>
    )
}
export default AllRoutes;