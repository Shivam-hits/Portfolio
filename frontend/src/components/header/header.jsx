import React from 'react'
import "./header.css"
import Master from "../../image/master(1).png"
import Hire from "../../image/Group2.svg"
import Star from "../../image/star.png"

function Header() {
  return (
    <div className='header_container'>

      <div className='header_navbar'>
        <h3>Act as Shivam</h3>
        <div className='header_navbar_2'>
          <h3>About Me</h3>
          <h3>Contact Me</h3>
        </div>
      </div>

      <div className='Master'>

        <div className='intro'>
          <h1 className="name">SHIVAM AWASTHI</h1>
          <p>HI, I would like to welcome you to my personal portfolio<br/>website</p>

          <div className='Hire'>
            <img src={Hire} className='hire_me_image' alt="" srcset="" />
          </div>

        </div>

        <div className='master_image'>
          <img src={Master} className='image'  alt="Master image" srcset="" />
        </div>
        
      </div>
  
      <div className='infinite'>
        <div className='contents'>
          <h1>UI UX DESIGN . ALGORITHMS . WEB DEVELOPMENT . REACTJS .  DATA STRUCTURES . VIDEO EDITINGS <img className='scroll_start' src={Star} alt=''></img></h1>
        </div>
        <div className='contents'>
          <h1>UI UX DESIGN . ALGORITHMS . WEB DEVELOPMENT . REACTJS .  DATA STRUCTURES . VIDEO EDITINGS <img className='scroll_start' src={Star} alt=''></img></h1>
        </div>
      </div>

    </div>
  )
}

export default Header;
// Backgound vectors and arrows are left