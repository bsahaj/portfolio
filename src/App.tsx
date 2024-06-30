import BackgroundBeams from "./components/BackgroundBeams";
import Navbar from "./components/Navbar";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import Experience from "./scenes/Experience";
import Intro from "./scenes/Intro";

const App = () => {
  return (
    <div className="bg-slate-900 h-screen relative overflow-hidden">
      <BackgroundBeams className="fixed top-0 left-0 w-full h-full" />
      <div className="relative h-screen overflow-y-auto">
        <div className=" bg-slate-900 fixed p-4 w-full z-20">
          <Navbar />
        </div>
        <section className="h-screen" id="home">
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section className="h-screen" id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
