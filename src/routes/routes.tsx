import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Products from "../pages/Home/Products";

const router  = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children :[
            {
               index : true,
               element : <Home /> 
            },
            {
                path : '/products',
                element : <Products/>
            },
            {
                path : '/details/:id',
                element : <ProductDetails/>
            },
            {
                path : '/update/:id',
                element : <UpdateProduct/>
            }
        ]
    }
])

export default router;