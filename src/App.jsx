import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Info from "./components/info/Info";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

function App() {
  const [activeSection, SetActiveSection] = useState("Home");
  return (
    <>
      <Header />
      <Nav />
      {activeSection === "Home" ? <Home /> : <></>}
      {activeSection === "Projects" ? <Projects /> : <></>}
      {activeSection === "Info" ? <Info /> : <></>}
      {activeSection === "Contact" ? <Contact /> : <></>}
      {activeSection === "Faq" ? <Faq /> : <></>}
      <About />
      <Footer />
    </>
  );
}

export default App;
