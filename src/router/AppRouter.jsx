
import Layout from "@components/atoms/Layout";
import Home from "@pages/home/Home";
import Tuition from "@pages/tuition/Tuition";
import {createBrowserRouter} from "react-router-dom"




const children = [

      { element: <Home />, path: "/" },
      { element: <Tuition />, path: "/tuition" },
   
     
    
     
];

export const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "",
      errorElement: (
        <a href="/" className="text-center">
          This page does not exist
        </a>
      ),
      children,
    },
  ]);
