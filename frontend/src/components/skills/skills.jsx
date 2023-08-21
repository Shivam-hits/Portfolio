import React from 'react'
import "./skills.css"
function Skills() {
  return (
    <div className='skills_container'>

      <h1 className='skills_title'>My Skills</h1>

      <div className='Skills_list_container'>

        <div className='skills_list_1'>
          <div className='skills_info'>
            <h2>UI/UX design</h2>
          </div>
          <div className='skills_info'>
            <h2>DataBase</h2>
          </div>
          <div className='skills_info'>
            <h2>Video Editing</h2>
          </div>
          <div className='skills_info'>
            <h2>Logo design</h2>
          </div>
        </div>

        <div className='skills_list_2'>
          <div className='skills_info'>
            <h2>Frontend development</h2>
          </div>
          <div className='skills_info'>
            <h2>React JS</h2>
          </div>
          <div className='skills_info'>
            <h2>JavaScript</h2>
          </div>
          <div className='skills_info'>
            <h2>Algorithms</h2>
          </div>
        </div>
        <div className='skills_list_3'>
          <div className='skills_info'>
            <h2>Java</h2>
          </div>
          <div className='skills_info'>
            <h2>Data Structures</h2>
          </div>
          <div className='skills_info'>
            <h2>CSS</h2>
          </div>
          <div className='skills_info'>
            <h2>HTML</h2>
          </div>

        </div>
        <div className='skills_list_3'>
          <div className='skills_info'>
            <h2>SQL</h2>
          </div>
          <div className='skills_info'>
            <h2>Node</h2>
          </div>
          <div className='skills_info'>
            <h2>Express</h2>
          </div>
          <div className='skills_info'>
            <h2>C/C++</h2>
          </div>

        </div>
      
      </div>
      
    </div>
  )
}

export default Skills;