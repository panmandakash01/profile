import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Experience from './components/Experence/Experiance'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Projects'
import Textmonials from './components/textmonials/Textmonials'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Services />
     <Portfolio />
     <Textmonials />
     <Contact />
     <Footer />

    </>
  )
}

export default App