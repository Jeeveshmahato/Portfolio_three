import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Skills,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Education,
  Footer,
} from "./components";

const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const SectionFallback = () => (
  <div className="w-full h-40 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-10 bg-primary max-w-7xl mx-auto flex flex-col items-center">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Tech />
        <Works />
        <Suspense fallback={<SectionFallback />}>
          <Feedbacks />
        </Suspense>
        <Education />
      </div>
      <div className="relative z-0">
        <Suspense fallback={<SectionFallback />}>
          <Contact />
          <StarsCanvas />
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
