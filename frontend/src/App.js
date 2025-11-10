import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechHighlights from './components/TechHighlights';
import Experience from './components/Experience';
import Skills from './components/Skills';
import MajorProject from './components/MajorProject';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <TechHighlights />
      <Experience />
      <Skills />
      <MajorProject />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;