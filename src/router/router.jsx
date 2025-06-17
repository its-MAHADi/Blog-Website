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
import ErrorPage from '../pages/ErrorPage';
import Loading from '../pages/Loading';
import BlogDetails from '../pages/BlogDetails';
import UpdateBlog from '../pages/UpdateBlog';

const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayouts,
     errorElement:<ErrorPage></ErrorPage>,
     hydrateFallbackElement:<Loading></Loading>,
   children:[
    {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/blogs'),
        hydrateFallbackElement:<Loading></Loading>
    },
    {
        path:"/add-blog",
        element: <PrivatRoute>
            <AddBlog></AddBlog>
        </PrivatRoute>
    },
    {
        path:"/all-blog",
        element:<AllBlogs></AllBlogs>,
      
        
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
              path:"/blog-details/:id",
              element:<PrivatRoute>
                <BlogDetails></BlogDetails>
              </PrivatRoute>,
               loader:()=>fetch('http://localhost:3000/all-blogs'),
               hydrateFallbackElement:<Loading></Loading>,
            },
              {
              path:"/update-blog/:id",
              element:<UpdateBlog></UpdateBlog>,
              loader:({params})=>fetch(`http://localhost:3000/all-blogs/${params.id}`),
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
