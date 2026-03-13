/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-50">
      <Background3D />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <FloatingWhatsApp />
    </div>
  );
}
