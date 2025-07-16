import { AppProvider } from '@provider/AppProvider';
import '../public/assets/styles/Style.css'
import React from "react";
import ReactDOM from "react-dom/client";



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>

    <AppProvider/>

  </React.StrictMode>,
  
)
