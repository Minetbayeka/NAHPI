
// import { RouterProvider } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import { router } from "../router/AppRouter";

import { AppContext } from "./AppContext";




const ContextProvider = ({children}) => {



 

  return (
    <AppContext.Provider
    value={{}}
    
    >
       {children} 
      
    </AppContext.Provider>
  );
};



export const AppProvider = () => {
  return(

    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>

    </ContextProvider>
   

  
  );
};










