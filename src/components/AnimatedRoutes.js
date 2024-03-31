import React from 'react'
import ProjectsPage from '../pages/ ProjectsPage';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import ResumePage from '../pages/ResumePage';
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
function AnimatedRoutes() {
    const location = useLocation() 
  return (
    <AnimatePresence> 

    <div>
      <Routes location={location} key={location.pathname}>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
