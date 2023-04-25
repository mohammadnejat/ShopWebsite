import React from "react";
import './App.css'
import Header from "./Component/Header/Header";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopButton from "./Component/TopButton/TopButton";
import Footer from "./Component/Footer/Footer";
import LoadSpinners from "./Component/LoadSpinners/LoadSpinners";


const App = () => {
  const routers = useRoutes(routes)
  
  return (
    <>
    
    {routers}
    
    </>
  )
}

export default App