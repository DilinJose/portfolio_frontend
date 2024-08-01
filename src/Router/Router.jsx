import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Skill from '../Pages/Skill'
import Qualification from '../Pages/Qualification'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='about' element={<About />} />
        <Route path='skill' element={<Skill />} />
        <Route path='qualification' element={<Qualification />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Router