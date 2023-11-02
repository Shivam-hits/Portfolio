import React from "react"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Homepage from "./Pages/Homepage.jsx"
import Project from "./Pages/project.jsx"
function App() {
  return (
    <BrowserRouter>
      {/* ROUTING --> START */}
      <Routes>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/project" element = {<Project />}/>
        <Route path="*" element = {<div> <h1>Error page (404 page not found)</h1> </div>}/>
      </Routes>
      {/* ROUTING --> END */}
      {/*WE DON'T HAVE TO IMPORT PAGES INDIVIDUALLY BECAUSE IF WE DO IT WILL SHOW THE HOMEPAGE(or any other main page)
      BELLOW THE REQUESTED PAGE */}
    </BrowserRouter>
  );
}
// x  
export default App;