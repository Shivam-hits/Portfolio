import React from 'react'
import Header from "../components/header/header.jsx"
import Box from "../components/box/box.jsx"
import Latest from "../components/latest/latest.jsx"
import Footer from "../components/footer/footer.jsx"
import Skills from "../components/skills/skills.jsx"
function Homepage() {
  return (
    <div>
      <Header />
      <Box />
      <Latest />
      <Skills />
      <Footer />
    </div>
  )
}

export default Homepage;