import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-0 bg-primary max-w-7xl mx-auto flex flex-col items-center">
        {/* <div className=" sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"> */}
          <Navbar />
        {/* </div> */}
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        
      </div>
      <div className=" relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
    </BrowserRouter>
  );
};

export default App;
