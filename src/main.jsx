import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './componets/shop/Shop';
import Home from './componets/Layout/Home';
import Orders from './componets/orders/Orders';
import Inventory from './componets/invantory/Inventory';
import Login from './componets/login/Login';
import cartproductsLoader from './Loaders/cartloader';
import Chackout from './componets/chackout/Chackout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader: () => fetch('http://localhost:5000/totalProducts')

      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartproductsLoader

      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "/chackout",
        element: <Chackout></Chackout>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode >,
)
