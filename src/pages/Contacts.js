import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
function Contacts() {
  return (
    <div>
      <Header/>
      <motion.div className="contact-details"
      initial = {{ opacity : 0, transition : '2.0'}}
      animate = {{opacity : 1}}
      exit = {{opacity : 0, transition : '2.0'}}
      >
        <div className="collective-contact">
        <h2 className='contact-heading'>Contact</h2>
        <p>Looking forward to hearing from you!</p>
        </div>
        <div className="actual-contacts">
          <div className="logos">
            <img className='linkedin' src="./images/linkedin.jpg" alt="" />
            <img className='x-logo' src="./images/x.png" alt="" />
            <img className='gitHub-logo' src="./images/github.png" alt="" />
            <img className='gmail-logo' src="./images/gmail.png" alt="" />
            <img className='phone-logo' src="./images/phone.png" alt="" />
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/lavanya-sinha-a4a3482bb/" target='__blank'>Connect With Me on Linkedin</a>
            <div className='x'>
            <a href="https://twitter.com/lavanya_sinha_" target='__blank'>Connect With Me on X/Twitter</a>
            </div>
            <div className="gitHub">
              <a href="https://github.com/Lavanya-Sinha" target='__blank'>My GitHub Profile</a>
            </div>
            <div className="gmail">
             <h5>lavanyasinha290104@gmail.com</h5>
            </div>
            <div>
              <h5>7984508960</h5>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer/>
    </div>
  )
}


export default Contacts
