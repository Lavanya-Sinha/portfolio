import React from 'react'

function Project(props) {
  return (
    <div className='content'>
      

     <div className="project-details">
     <h2 className='project-name'>{props.projectName}</h2>
        <p className="project-summary">
           {props.projectSummary}
        </p>
        <h3>TECH-STACK : {props.projectTech}</h3>
       

        <div className='links'>
          <a href={props.projectGit} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-1">Github</button>
          </a>
         {
            props.projectLive !== "" ?
            <a href={props.projectLive} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-2">Website</button>
          </a> : (<h4 className='default-string'>website link will be avaibale soon...</h4>)
         }
        </div>
     </div>
     <div className="image">
        <img className='project-image' src={props.projectImage} alt="" />
     </div>
    </div>
  )
}

export default Project
