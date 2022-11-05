import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio'
import Experience from './components/experience/Experience'
import Services from './components/services/services'
import Testimonial from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default App