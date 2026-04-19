import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function ProgrammingView() {
  return (
    <div className="programming-view">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
