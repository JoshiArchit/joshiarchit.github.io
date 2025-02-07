import React from 'react'
import Navbar from './sections/Navbar'
import { Hero } from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Work from './sections/Work'

const App = () => {
  return (
    <main className="w-4/5 mx-auto px-[5%] relative">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Work />
    </main>
  )
}

export default App