import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import NewNavbar from './components/Newnavbar'
const App = () => {
  return (
    <BrowserRouter>
      <div className=' relative z-0 bg-primary'>
        <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <NewNavbar />
          <Hero />

        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className=' relative z-0'>
          <Contact />
          <StarsCanvas />

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App