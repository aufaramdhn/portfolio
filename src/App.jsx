import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAos } from "./hooks/UseAos";
import { Navbar } from "./components/Navbar";
import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Skills } from "./containers/Skills";
import { Footer } from "./components/Footer";
import { Project } from "./containers/Project";
import { ScrollToTop } from "./components/ScrollToTop";
import { GithubContribution } from "./components/GithubContribution";

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
      <ScrollToTop />
      <Home />
      <About />
      <Skills />
      <Project />
      {/* <GithubContribution /> */}
      <Footer />
    </>
  );
}
