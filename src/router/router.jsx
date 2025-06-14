import React from 'react'
import {createBrowserRouter} from "react-router";
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../pages/Home';
import AddBlog from '../pages/AddBlog';
import AllBlogs from '../pages/AllBlogs';
import FeaturedBlogs from '../pages/FeaturedBlogs';
import WishList from '../pages/WishList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayouts from '../Layouts/AuthLayouts';
import PrivatRoute from '../provider/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayouts,
   errorElement:<p>error page</p>,
   children:[
    {
        index:true,
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/add-blog",
        element: <PrivatRoute>
            <AddBlog></AddBlog>
        </PrivatRoute>
    },
    {
        path:"/all-blog",
        element:<AllBlogs></AllBlogs>
    },
    {
        path:"/Featured-blog",
        element:<FeaturedBlogs></FeaturedBlogs>
    },
    {
        path:"/Wishlist",
        element: <PrivatRoute>
            <WishList></WishList>
        </PrivatRoute>
    },
   ]
  },
  {
    path:"/auth",
    element:<AuthLayouts></AuthLayouts>,
    children:[
        {
            path:"/auth/login",
            element:<Login></Login>
        },
        {
            path:"/auth/register",
            element:<Register></Register>
        },
    ]
  }
]);

export default router
