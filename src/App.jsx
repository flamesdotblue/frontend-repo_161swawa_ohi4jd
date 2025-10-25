import Hero from './components/Hero';
import MarqueeBrands from './components/MarqueeBrands';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <Hero />
      <MarqueeBrands />
      <Experiences />
      <Gallery />
      <Contact />

      <footer className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex items-center justify-between text-white/50">
          <p>© {new Date().getFullYear()} Aurum Events. All rights reserved.</p>
          <div className="text-xs">Crafted with intention.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
