import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
function Home() {
  const navigate = useNavigate();
  const handleResume = () => {
    navigate('/resume')
  }
  const handleProjects = () => {
    navigate('/projects')
  }
  const handleContacts = () => {
    navigate('/contacts')
  }

  return (
    <motion.div className='home' 
      initial = {{ opacity : 0}}
      animate = {{opacity : 1}}
      exit = {{opacity : 0}}
    >
     <Header/>

      <main className='main'>
        <img src="./images/me-2.jpeg" alt="" className='img' />
      
           <div className="media-qyery">

        <div className='about-me'>
            <p className='greeting'>Hello</p>
            <p className="heading">A Bit About Me</p>
            <p className="paragraph">I am Lavanya Sinha. I am an aspiring front-end developer. I am originally from Patna, India but have completed my primary education from Gujarat.Currently, I am pursuing my Under-Graduation in Bachelor of Computer Applications in Acharya Bangalore Business School in Bangalore, Inida. I am well versed with HTML, CSS, Bootstrap, Basic and Advance JavaScript and right now I am working enthusiastically on React and that is reflected in my projects as well. This portfolio is also build on React </p>
        </div>
        <div className="buttons">
            <button className="btn btn-1" onClick={handleResume}>Resume</button>
            <button className="btn btn-2" onClick={handleProjects}>Projects</button>
            <button className="btn btn-3" onClick={handleContacts}>Contact</button>
        </div>
           </div>
      </main>

        
        <Footer/>
    </motion.div>
  )
}

export default Home
