import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
function ResumePage() {
  return (
    <motion.div
    initial = {{ opacity : 0, transition : '2.0'}}
             animate = {{opacity : 1}}
             exit = {{opacity : 0, transition : '2.0'}}
    >
      <Header/>
      <div className="resume">
        <div className="resume-heading">
          <h2>Resume</h2>
          </div>
          <div className="skills">
            <h2 className='skills-heading'>Skills</h2>
            <div className="tech-skills">
              <h3>Technical Skills</h3>
            <div className="good-grasp">
              <h3>Good Grasp</h3>
             <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
             </ul>
            </div>
            <div className="moderate-grasp">
              <h3>Basic Grasp</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDb</li>
                <li>Git and GitHub</li>
                <li>SCSS</li>
                <li>C lang</li>
                <li>Python</li>
              </ul>
            </div>
            </div>
            <div className="soft-skills">
              <h3 className='soft-skill-heading'>Soft Skills</h3>
              <ul className='no-bullets'>
                <li>Leadership</li>
                <p className = 'resume-paragraphs'>Strong Leadership skills demonstrated by taking <br /> initiave manage people in group projects</p>
                <li>Problem Solving</li>
                <p className = 'resume-paragraphs'>Skilled problem solver with a track record of identifying <br />issues, analyzing root causes, and implementing effective solutions.</p>
                <li>Emotional Intelligence</li>
                <p className = 'resume-paragraphs'>High emotional intelligence demonstrated through empathy,<br /> active listening, and understanding of others' perspectives.</p>
                <li>Hard Worker</li>
                <p className = 'resume-paragraphs'>Acknowledged for my strong dedication to continuous improvement, <br /> always seeking ways to enhance skills and knowledge to excel in my role.</p>
                <li>Communication Skills</li>
                <p className = 'resume-paragraphs'>Proven track record of effective communication in both <br /> individual and team settings, enhanced by my participation in coding seminars and events</p>
                </ul>
            </div>
          </div>
            <h2 className='certification-heading'>Certifications and Achievements</h2>
          <div className="certification">
            <div className="paras">
            <p className="lu-paragraph">
              This is the first course i took of react from @LetsUpgrade. In this, I learnt about component based design <br />structure and about the React Dom Tree. I learnt about the basics of React such as props and hooks. <br />After the period of 5 days, I received this certification
            </p>
            <div className="corizo-paragraph">
              <p>This certificationis of an Internship Training Programme that was provided by @corizo. The programme was of two months. <br /> One month for the training classes and second one for projects. They taught us HTML, CSS, Basic JavaScript,<br /> Node.js, Express.js and MongoDB. This was my first full-stack project and <br />I gained a lot of value and knowledge from this. By the end of the second month i was given this certification by corizo. </p>
            </div>
            </div>
            <div className="certification-img">
              <div>
              <img className = 'lu-img' src="./images/lu-2.jpg" alt="" />
              </div>
                <div>
              <img className='corizo-img' src="./images/corizo.jpg" alt="" />
                </div>
            </div>
          </div>
        
      </div>
      <Footer/>
    </motion.div>
  )
}



export default ResumePage
