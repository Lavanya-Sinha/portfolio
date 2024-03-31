import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

function Header() {
 
 const [sideMenu, setSideMenu] = useState(false)
 const [closeSideMenu, setCloseSideMenu] = useState()
 const handleOpenMenu = () => {
   setSideMenu(!sideMenu)
 }
 const handleCloseMenu = () => {
  setCloseSideMenu(setSideMenu(false))
 }
  return (
    <motion.div className='duv-head'
    initial = {{ opacity : 0, transition : '2.0'}}
    animate = {{opacity : 1}}
    exit = {{opacity : 0, transition : '2.0'}}
    >
       <header className='header'>
        <h1 className='name'>Lavanya Sinha</h1>
             <button className='side-btn' onClick={handleOpenMenu}>
             <img className='ham' src="./images/ham.png" alt="" />
             </button>
        {
         sideMenu===true ?
        <div className="hamburger">
             <div className='sidebar'>
              <button className='side-btn x-btn' onClick={handleCloseMenu}>
              <img className='cross' src="./images/cross.png" alt="" />
              </button>
            
                  <div className="tabs">
                    <Link to="/" className='res-links'><h2>Home</h2></Link>
                    <Link to="/resume" className='res-links'><h2>Resume</h2></Link>
                    <Link to="/projects" className='res-links'><h2>Projects</h2></Link>
                    <Link to="/contacts" className='res-links'><h2>Contact</h2></Link>
                  </div>
             </div>
        </div> :

        <nav>
            <div className="options" >
            <Link to="/" className='linkers'>Home</Link>
            <Link to="/resume" className='linkers'>Resume</Link>
        <Link to="/projects" className='linkers'>Projects</Link>
        <Link to="/contacts" className='linkers'>Contact</Link>
            </div>
  </nav>

          
        }
      </header>
    </motion.div>
  )
}

export default Header
