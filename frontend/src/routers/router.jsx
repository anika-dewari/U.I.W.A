import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import Home from "../pages/Home";
  import Inshome from "../pages/Inshome";
  import Insights from "../pages/Insights";
  import { Signup } from "../pages/Signup";
  import { Signin } from "../pages/Signin";
  import { University } from "../pages/University";
   import { Inspector } from "../pages/Inspector";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
             path:"/inshome",
             element:<Inshome/>
        },
        {
              path:"/insights",
              element:<Insights />
        },
        {
             path:"/signup",
             element:<Signup/>
        },
        {
          path:"/signin",
          element:<Signin/>
        },
        {
          path:"/university",
          element:<University/>
        },
        {
          path:"/inspector",
          element:<Inspector/>
       },
        // {
        //     path:"/book/:id",
        //     element:<SingleBook/>, 
        //     loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)       
            
        // }
     ]
    },
  //   {
  //     //  path:"/university/dashboard",
  //     //  element:<DashboardLayout/>,
  //     //  children:[
  //     //    {
  //     //      path:"/university/dashboard",
  //     //      element:<Dashboard/>
  //     //    },
  //     //    { // second page joh bhi banega tera university ka uska path yha aa daal
  //     //      path:"/university/dashboard/secondpage",
  //     //      element: <UploadBook/>
  //     //    },
  //   //     {
  //   //       path:"/admin/dashboard/editBooks/:id",
  //   //       element: <EditBooks/>,
  //   //       loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
  //   //     }
  //    ]
  //   }
]);

  export default router;