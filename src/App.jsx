import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Skills } from "./containers/Skills";
import { Footer } from "./components/Footer";
import { Project } from "./containers/Project";
import { ScrollToTop } from "./components/ScrollToTop";
import { useAos } from "./hooks/useAos";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 50,
    });
  });
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Skills /> */}
      <Project />
      {/* <GithubContribution /> */}
      <ScrollToTop />
      <Footer />
    </>
  );
}
