import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from '../components/Project'
import {motion} from 'framer-motion'
function  ProjectsPage() {
  const projects = [{
    projectNo : 1,
    projectName : 'Connect',
    projectImage : './images/Hello.png',
    projectSummary : 'This is my latest web application. It is a chat app. I named it Connect. This application includes React JavaScript, SCSS and Firebase. This Application lets you send and recieve texts and performs the basic functionality of a chat application. I took internet references to build this.',
    git : 'https://github.com/Lavanya-Sinha/chat',
    live : 'https://connect-xi-five.vercel.app/',
    technologies : 'React, SCSS, Firebase'
  },
{
  projectNo : 2,
  projectName : 'NoteBook',
  projectImage : './images/Notebook.png',
  projectSummary : 'This is one of my recent web application. It is a Note-Taking app. I named it NoteBook. This application includes React JavaScript and CSS. This Application lets you save and delete your notes. It stores your data in the local-storage so you do not have to worry about your data being wiped out as you refresh the page. I took internet references to build this.',
  git : 'https://github.com/Lavanya-Sinha/notebook/tree/main/src',
  live : 'https://notebook-5r5htvn9n-lavanyas-projects-a707b890.vercel.app/',
  technologies : 'React, CSS'
},
{
  projectNo : 3,
  projectName : 'Horizon Scan',
  projectImage : './images/weather.png',
  projectSummary : 'This is one of my another very recent web application. It is a weather app. I named it Horizon Scan. This application includes React JavaScript and CSS. This Application lets you know about any location weather. I used openweather Api to fetch the live data and displayed it beautifully with the help of css. I took internet references to build this.',
  git : 'https://github.com/Lavanya-Sinha/scan',
  live : 'https://horizon-scanner.vercel.app/',
  technologies : 'React, CSS'
},
{
  projectNo : 4,
  projectName : 'Express',
  projectImage : './images/news.png',
  projectSummary : 'This is one of my beginner level web application. It is a news app. I named it Express. This application includes React JavaScript and CSS. I built this to get a better understanding of React and I gained a bit confidence by building this application. It included all the React basics one needs to know. I used news Api to fetch live news data and added a date-picker with it. i learned to build this in a React course',
  git : 'https://github.com/Lavanya-Sinha/news',
  live : '',
  technologies : 'React, CSS'
},
{
  projectNo : 5,
  projectName : 'Texters',
  projectImage : './images/texts.png',
  projectSummary : 'This is first web application on React. It is a text manipulating app. I named it Texters. This application includes React JavaScript and CSS. I built this to learn React. You can manipulate your texts and toogle into dark mode using this application. I was very enthusiastic about learning React and swtiching from JavaScript and that is why I decided to build this app with the help of a react course',
  git : 'https://github.com/Lavanya-Sinha/news',
  live : 'https://texters-beta.vercel.app/',
  technologies : 'React, bootstrap'
},
{
  projectNo : 6,
  projectName : 'Care Beauty',
  projectImage : './images/care-beauty.png',
  projectSummary : 'This is an e-commerce web application. I named it Care Beauty. I got an internship training at @corizo.in and this was my minor project that i built in a month. This project is a full-stack project and i recieved certification from them after completing this internship training program',
  git : 'https://github.com/Lavanya-Sinha/ekart',
  live : '',
  technologies : 'HTML, Css, JavaScript, Node.js, Express.js and MongoDB'
},
{
  projectNo : 7,
  projectName : 'Tech Grounds',
  projectImage : './images/tech.png',
  projectSummary : 'This is an article website. I named it Tech Grounds. Based on the card that you click you will recieve the information regarding the same technology. This is a static website and i made it for my college and to my own understanding better in html and css.',
  git : 'https://github.com/Lavanya-Sinha/tech-grounds',
  live : 'https://tech-grounds.vercel.app/',
  technologies : 'HTML, CSS'
},
{
  projectNo : 8,
  projectName : 'Res Project',
  projectImage : './images/res.png',
  projectSummary : 'This is a responsive website. I named it Res-Project. I made this project because i wanted to learn about responvise web designs anf frameworks. Here I learned about some new tags that i have used in building this portfolio as well',
  git : 'https://github.com/Lavanya-Sinha/res-project',
  live : 'https://res-project-km9jnvqwh-lavanyas-projects-a707b890.vercel.app/',
  technologies : 'HTML5, CSS-3'
},
{
  projectNo : 9,
  projectName : 'Find The Buried Tressure',
  projectImage : './images/game.png',
  projectSummary : 'This was the first game that I built in javascript. I named it Find The Buried Tressure. It is a simple game where you can find the buried Tressure by clicking on the map and at the end it displays the number of clicks that you made to find the treasure. This was my first project ever and I stepped into JavaScript after this game',
  git : 'https://github.com/Lavanya-Sinha/game',
  live : '',
  technologies : 'HTML, JavaScript'
}
]
  return (
    <motion.div
    initial = {{ opacity : 0, transition : '2.0'}}
             animate = {{opacity : 1}}
             exit = {{opacity : 0, transition : '2.0'}}
    >
      <Header/>
      <h1 className='project-heading'>Projects</h1>
      {
        projects.map((project)=>{
          return (
      <div className="project-list" key={project.projectNo}>
      <Project projectName={project.projectName}
      projectSummary={project.projectSummary}
      projectImage={project.projectImage}
      projectGit ={project.git}
      projectLive ={project.live}
      projectTech = {project.technologies}
      />
      </div>
            
          )
        })
      }
      <Footer/>
    </motion.div>
  )
}

export default  ProjectsPage
