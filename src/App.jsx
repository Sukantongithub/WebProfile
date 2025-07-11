import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Bg from "./components/Bg/Bg";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Bg />
                <Navigation />
                <Home />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Bg />
                <Navigation />
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navigation />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/skills"
            element={
              <>
                <Bg />
                <Navigation />
                <Skills />
                <Footer />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Bg />
                <Navigation />
                <Projects />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Bg />
                <Navigation />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
