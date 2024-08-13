import About from '../About'
import Contact from '../Contact'
import Home from '../Home'
import Projects from '../Projects'
import Qualification from '../Qualification'
import Skill from '../Skill'
import Header from './header'

const Layout = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Skill />
            <Qualification />
            <Projects />
            <Contact />
        </>

    )
}

export default Layout