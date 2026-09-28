import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
