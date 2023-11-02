import React from 'react'
import "./latest.css"
import Project1 from "../../image/project1.png"
import Project2 from "../../image/project2.png"
import Project3 from "../../image/project3.png"
import Project4 from "../../image/project4.png"
import { Link } from "react-router-dom"
function Latest() {
  return (
    <div className='Latest_projects'>
      <div className='project_desc'>
      <h1>Latest Projects</h1>
      {/* <h3><Link to="/project">See All</Link></h3> */}
      </div>
      
      <div className='project_container'>  {/*   project card container */}
        

        {/*   project cards  */}

        <div className='project_cards'>
          <div className='project_cards_image'>
            <img src={Project1} alt="" srcset="" />
          </div>
          <p className='project_title'>Portfolio</p>
          <div className='about_project'>
            <p>html</p>
            <p>css</p>
            <p>react js</p>
            <p>UI/UX design</p>
          </div>
          
        </div>
        <div className='project_cards'>
          <div className='project_cards_image'>
            <img className='AMH' src={Project2} alt="" srcset="" />
          </div>
          <p className='project_title'>Awasthi Medical</p>
          <div className='about_project'>
            <p>html</p>
            <p>css</p>
            <p>react js</p>
            <p>JavaScript</p>
            <p>UI/UX design</p>
          </div>

        </div>

        <div className='project_cards'>
          <div className='project_cards_image'>
            <img className="apple" src={Project3} alt="" />
          </div>
          <p className='project_title'>Apple as milk company</p>
          <div className='about_project'>
            <p>UI/UX design</p>
            <p>Figma</p>
          </div>
        </div>
        <div className='project_cards'>
          <div className='project_cards_image'>
            <img src={Project4} alt="" srcset="" />
          </div>
          <p className='project_title'>GDSC</p>
          <div className='about_project'>
            <p>UI/UX design</p>
            <p>Figma</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Latest;