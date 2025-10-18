import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import './App.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Services from './components/Services';
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.to('body', { opacity: 1, duration: 1 });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
  }, []);

  return (
    <div className="App bg-dark-theme text-gray-200 overflow-hidden">
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Services />
        <WorkExperience />
        <Contact />
      </main>

    </div>
  );
}

export default App;
