import React from 'react'
import "./box.css"
import Closed from "../../image/closed_box.png"
import Open from "../../image/open_box.png"
function Box() {
  return (
    <div className='Aboutme_container'>
      <p className='about_me'>What I can do</p>
      
      <div className='about_parent_container'>

        <div className='about_child_container_1'>
          <h2>I can deliver the desired result <br/>
          that exceeds your expectation.</h2>
          <img src={Closed} className='closed_box' alt="" srcset="" />
        </div>
        <div className='about_child_container_2'>
          <img src={Open} alt="" />
          <h2>
            Hi, I’m Shivam Awasthi I understand the work/project<br/>
            and its to make profit for the firm/company, this<br/> 
            skill/observation of mine’s differentiate me from others.<br/>
            I believe in establishing strong partnerships with <br/>
            my clients, working closely together to achieve the <br/>
            desired outcomes. I value open and transparent <br/>
            communication, providing regular updates and <br/>
            seeking feedback to ensure that my work aligns <br/>
            with your vision.
          </h2>
        </div>
      </div>
      
    </div>
  )
}

export default Box;