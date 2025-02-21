// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import axios from "axios";


// import {Sample1} from './components/compo1'
// import Samp2 from './components/compo1'
// import { StyFun } from './components/compo1'
// import { Parent1 } from './components/compoPropsSent'
// import { Page1 } from './page1/P1'
// import { Page2 } from './page2/P2'
// import { SlBadge,SlAnchor,SlFire } from "react-icons/sl";
// import {Task2} from './Task2/Task2j'
// import Render from './components/render'
// import DynamicStyle from './components/render'
// import {Fruit} from './components/Task1'
// import DynamicStyle from './components/Task1'
// import {UseStateHook} from './components/useStateHook1'
// import {ListAndMap} from './components/listAndMap'
// import {Task3} from './Task3/Task3J'
// import {SlickSlider1} from './components/slickSlider1'
// import {SearchAndFilter} from './components/searchAndFilter'
// import { Task4 } from "./Task4/Task4A"
// import { Form } from "./components/Form1"
// import { NewForm } from "./components/Form1"
// import { HappyHome } from "./components/forAllFunHome"
// import { FormLocalStorage } from "./components2/LocalStorage1"
// import { RouterFunction1 } from "./components2/Navigation1/Compo1_Router";
// import { Login } from "./components/Login1"
// import { RouterFun } from "./ConnectDB/router"
// import FullCardAnimation from "./newEx/card1"; 
// import { RouterFunfb } from "./fb/r1";
// import { FarmerProfilepage } from "./fb/FarmerProfilePage";
// import ParticlesComponent from "./newEx/particles"
import { JGK_portfolio } from "./portfolio/JGK_portfolio"


function App() {
  // const [count, setCount] = useState(0)
  // const sendData = () => {
  //   const data = document.getElementsByTagName('input')[0].files[0];
  //   const mydata = new FormData();
  //   mydata.append('file', data);
  //   axios.post("http://localhost:9000/student-api", mydata)
  //   .then((res) => console.log("Image Uploaded"))
  //   .catch((err) => console.log(err))
  // }

  return (

    <>
    {/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div> 
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> 
    */}  

    {/*
      <h3>Hello</h3>
      <p>Hello Friends</p>
      <Sample1 />
      <Samp2 />
      <StyFun/>
      <SlAnchor />
      <SlBadge style={{fontSize:'60px',color:'green'}}/>
      <SlFire style={{color:'red'}}/>
      <Parent1/>
    */}
      {/* <Parent1/> */}
      {/* <Page1/> */}
      {/* <Page2/> */}
      {/* <Task2/> */}
      {/* <Render /> */}
      {/* <Fruit/> */}
      {/* <DynamicStyle/> */}
      {/* <UseStateHook/> */}
      {/* <Task3/> */}
      {/* <ListAndMap/> */}
      {/* <SlickSlider1/> */}
      {/* <SearchAndFilter/> */}
       {/* <Task4/> */}
      {/* <Form/> */}
      {/* <NewForm/> */}
      {/* <HappyHome/> */}
      {/* <FormLocalStorage/> */}
      {/* <RouterFunction1/> */}
      {/* < Login/> */}
      {/* <RouterFun/> */}
      {/* <input type="file" /><button onClick={sendData}>send</button> */}
      {/* <FullCardAnimation/> */}
      {/* <RouterFunfb/> */}
      {/* <FarmerProfilepage/> */}
      {/* <ParticlesComponent/> */}
      <JGK_portfolio/>
    </>
  )
}

export default App;