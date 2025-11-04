import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Education from './components/Education';


function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
