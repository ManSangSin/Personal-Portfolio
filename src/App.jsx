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
import Welcome from "./components/welcome/Welcome";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <>
      <Header />
      <Nav setActiveSection={setActiveSection} />
      <Welcome />
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
