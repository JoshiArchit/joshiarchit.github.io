import React from 'react'
import Navbar from './sections/Navbar'
import { Hero } from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Work from './sections/Work'
import Footer from './sections/Footer'
import Contact from './sections/Contact'

const App = () => {
  return (
    <main className="w-4/5 mx-auto px-[5%] relative">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Work />
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App