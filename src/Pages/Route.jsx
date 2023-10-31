import {
    createBrowserRouter,
  } from "react-router-dom";


import Home from "./Home";
import Main from "./ForMain/Main";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import FourzeroFour from "./FourzeroFour";
import AllCars from "./AllCars";
import Mycars from "./Mycars";
import Forgetpassword from "./Forgetpassword";
import Payment from "./Payment/Payment";

import PaymentId from "../Component/paymentid/Paymentid";
import Flowchart from "../Component/flowchart/Flowchart";
import  Dashboard  from "./dashboard/Dashboard";
import SelactAdmin from "../Component/selactadmin/SelactAdmin";
import Feeddelete from "../Component/feeddelete/Feeddelete";
import Dashtestimonial from "../Component/workstestimonial/Dashtestimonial";
import Sharepage from "./sharepage/Sharepage";
import Customerfeedback from "./customersfeedback/Customerfeedback";
import Addtestimonial from "../Component/Addtestimonial/Addtestimonial";
import Testimonialupdate from "../Component/updatefeedback/Testimonialupdate";
import Addcars from "../Component/Addcars/Addcars";
import UpdateCarsection from "../Component/Updatecarsection/UpdateCarsection";
import Dashallcars from "../Component/dashallcars/Dashallcars";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: 'allcars',
        element: <AllCars></AllCars>
      },
      {
        path: 'mycars',
        element: <Mycars></Mycars>
      },
      {
        path: 'forget',
        element: <Forgetpassword></Forgetpassword>
      },
      {
        path: 'singlegetcars/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`https://cars-bazar-server-hbpv37fkw-321niloy.vercel.app/singlegetcars/${params.id}`)
      },
      {
        path:"share",
        element:<Sharepage></Sharepage>
      }
      ,
      {
        path:"feedback",
        element:<Customerfeedback></Customerfeedback>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
     {
      path: "/dashboard",
      element:<PaymentId></PaymentId>
     },
     {
      path:"flowchart",
      element:<Flowchart></Flowchart>
     },
     {
      path:"selactadmin",
      element:<SelactAdmin></SelactAdmin>
     },
     {
      path:"feeddelete",
      element:<Feeddelete></Feeddelete>
     },
     {
      path:"dashtestimonial",
      element:<Dashtestimonial></Dashtestimonial>
     },
     {
      path:"addtestimonial",
      element:<Addtestimonial></Addtestimonial>
     },
     {
      path:"updatetestimonial/:id",
      element:<Testimonialupdate></Testimonialupdate>,
      loader: ({ params }) => fetch(`https://cars-bazar-server-hbpv37fkw-321niloy.vercel.app/testimonial/${params.id}`)
     },
     {
      path:"addcars",
      element:<Addcars></Addcars>
     },
     {
      path:"dashallcars",
      element:<Dashallcars></Dashallcars>
     },
     {
      path:"Updatecars/:id",
      element:<UpdateCarsection></UpdateCarsection>,
      loader: ({ params }) => fetch(`https://cars-bazar-server-hbpv37fkw-321niloy.vercel.app/allcars/text/${params.id}`)
     },

    ]
  },
  {
    path: "*",
    element: <FourzeroFour></FourzeroFour>
  }
]);


