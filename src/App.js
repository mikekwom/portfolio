import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Resume />
    </div>
  );
}
