import { Navbar } from "./components/Navbar";
import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Skills } from "./containers/Skills";
import { Footer } from "./components/Footer";
import { Project } from "./containers/Project";

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
