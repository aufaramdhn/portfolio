import "aos/dist/aos.css";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./containers/Home.jsx";
import { About } from "./containers/About.jsx";
import { Skills } from "./containers/Skills.jsx";
import { Footer } from "./components/Footer.jsx";
import { Project } from "./containers/Project.jsx";
import { useAos } from "./hooks/UseAos.jsx";

export default function App() {
  useAos();
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer />
    </>
  );
}
