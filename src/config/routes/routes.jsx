import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AddPage from "../../pages/AddPage";
import Navbar from "../../components/Navbar";
import DetailsPage from "../../pages/DetailsPage";

const AppLayout = ()=>{
    return (
        <div className="flex flex-col w-screen h-screen">
            <Navbar/>
            <Outlet/>
        </div>
    );
}
export const router = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/add-employee',
                element:<AddPage/>
            },
            {
                path:'/details/:id',
                element:<DetailsPage/>
            }
        ]
    }
]);