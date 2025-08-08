import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {  
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;