import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div className='footer_container'>
      <h3 className='footer_ini'>Connect to work</h3>

      <div className='footer_contact_container_1'>
        <div className='footer_contact_1'>
          <h1 className='footer_contact_text'>
            Let’s<br/>
            Work<br/>
            Together
          </h1>
        </div>
        <div className='footer_client'>
          <h3>Client Satisfaction, using up-to-date industrial tech<br/>
            and understanding the need of users and industry<br/>
            are our prime concern.
          </h3>
          <button className='footer_contact_button'>Get in touch</button>
        </div>
        
      </div>
      <hr className='footer_section_divide'/>

      <div className='footer_contact_container_2'>

        <div className='footer_ind'>
          <p>Working in development and design industry has given me a<br/>
            strong sense of how industrial work and generate profit</p>
        </div>

        <div className='footer_social'>
          <div className='insta'>
            <p>Instagram</p>
          </div>
          <div className='Linkedin'>
            <p>Linkedin</p>
          </div>
          <div className='dribbble'>
            <p>dribbble</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;