import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "./App.css";

import Headers from "./Components/Headers";

import Home from "./Components/Home";

import About from "./Components/About";

import Skills from "./Components/Skills";

import Qualification from "./Components/Qualification";

import MyWork from "./Components/My Work";

import Contact from "./Components/Contact";

import Footer from "./Components/Footer";

import ScrollUp from "./Components/Scrollup";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Headers />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <MyWork />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
