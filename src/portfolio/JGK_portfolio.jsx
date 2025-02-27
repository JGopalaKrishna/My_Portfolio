import {React} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import './all_Styles.css';
import { BackGroundAnimation } from "./backgroundAnimation";
import { NavBar } from "./navBar";
import MouseAnimation from "./MouseAnimation";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export const JGK_portfolio = ()=>{
  return(
    <>
      <main className="HoleBody">
        <BackGroundAnimation id="particles"/>
        <MouseAnimation/>
        <BrowserRouter>
         <Routes>
           <Route path="/" element={<NavBar/>}>
            <Route index element={<Home/>}/>
            <Route path="/About"  element={<About/>}/>
            <Route path="/Skills"  element={<Skills/>}/>
            <Route path="/Projects"  element={<Projects/>}/>
            <Route path="/Contact"  element={<Contact/>}/>
            {/* <Route path="/Certificates"  element={<Certificates/>}/> */}
           </Route>
         </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}
