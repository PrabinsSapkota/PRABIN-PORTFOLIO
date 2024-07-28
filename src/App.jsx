import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import HeroPage from './pages/HeroPage'
import SkillsPage from './pages/SkillsPage'
import AllPage from './pages/AllPage'

export default function App() {
  return (
 <>
 <Navbar/>
 <Routes>
<Route path='/' element={<AllPage/>}></Route>
<Route path='/about me' element={<HeroPage/>}></Route>
<Route path='/contact' element={<ContactPage/>}></Route> 
<Route path='/projects' element={<ProjectPage/>}></Route> 
<Route path='/skills' element={<SkillsPage/>}></Route>
  </Routes>
 
 </>
  )
}
