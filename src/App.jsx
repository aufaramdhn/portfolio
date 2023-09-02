import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./containers/Home.jsx";
import { About } from "./containers/About.jsx";
import { Skills } from "./containers/Skills.jsx";
import { Footer } from "./components/Footer.jsx";
import { Project } from "./containers/Project.jsx";

export default function App() {
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
