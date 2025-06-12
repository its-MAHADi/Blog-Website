import React from 'react'
import {createBrowserRouter} from "react-router";
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../pages/Home';
import AddBlog from '../pages/AddBlog';
import AllBlogs from '../pages/AllBlogs';
import FeaturedBlogs from '../pages/FeaturedBlogs';
import WishList from '../pages/WishList';

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
        element:<AddBlog></AddBlog>
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
        element:<WishList></WishList>
    },
   ]
  },
]);

export default router
