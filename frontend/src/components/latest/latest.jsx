import React from 'react'
import "./latest.css"
import { Link } from "react-router-dom"
function Latest() {
  return (
    <div className='Latest_projects'>
      <div className='project_desc'>
      <h1>Latest Projects</h1>
      <h3><Link to="/project">See All</Link></h3>
      </div>
      
      <div className='project_container'>  {/*   project card container */}
        

        {/*   project cards  */}

        <div className='project_cards'>
          <div className='project_cards_image'>

          </div>
        </div>
        <div className='project_cards'>
          <div className='project_cards_image'>

          </div>
        </div>
        <div className='project_cards'>
          <div className='project_cards_image'>

          </div>
        </div>
        <div className='project_cards'>
          <div className='project_cards_image'>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Latest;