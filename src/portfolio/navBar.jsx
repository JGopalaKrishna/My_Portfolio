import { useState } from 'react';
import { Link,Outlet } from "react-router-dom";

import 'C:/Users/jakka/OneDrive/Desktop/react/ReactFolder/src/portfolio/all_Styles.css';
import { CgMenu } from "react-icons/cg";
import { RiCloseLargeFill } from "react-icons/ri";

export const NavBar = ()=>{
  const [show_menu,setshow_menu]=useState(false);
  return(
    <>
      <nav className='Navbar ComeFromTop'>
        <section><p className='MyName'>Gopala Krishna.J</p></section>
        <section className='MenuItemsList'>
            <Link to="/" className='MenuItem UnderLine'>Home</Link>
            <Link to="/About" className='MenuItem UnderLine'>About</Link>
            <Link to="/Skills" className='MenuItem UnderLine'>Skills</Link>
            <Link to="/Projects" className='MenuItem UnderLine'>Projects</Link>
            {/* <Link to="/Certificates" className='MenuItem UnderLine'>Certificates</Link> */}
            {/* <Link to="/Experience" className='MenuItem UnderLine'>Experience</Link> */}
            <Link to="/Contact" className='MenuItem UnderLine'>Contact</Link>
        </section>
        <section className='MenuItemsList_Phone_Icon' onClick={()=>{setshow_menu(!show_menu)}}>{show_menu ?<RiCloseLargeFill size={30}/>:<CgMenu size={30}/> }</section>
          <section className={show_menu ? 'MenuItemsList_Phone Animation1' : 'MenuItemsList_Phone'} >
            <Link to="/" className='MenuItem_Phone UnderLine'>Home</Link>
            <Link to="/About" className='MenuItem_Phone UnderLine'>About</Link>
            <Link to="/Skills" className='MenuItem_Phone UnderLine'>Skills</Link>
            <Link to="/Projects" className='MenuItem_Phone UnderLine'>Projects</Link>
            {/* <Link to="/Certificates" className='MenuItem_Phone UnderLine'>Certificates</Link> */}
            {/* <Link to="/Experience" className='MenuItem_Phone UnderLine'>Experience</Link> */}
            <Link to="/Contact" className='MenuItem_Phone UnderLine'>Contact</Link>
          </section>
      </nav>
      <Outlet/>
    </>
  )
}
