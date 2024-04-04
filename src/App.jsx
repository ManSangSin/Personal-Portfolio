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
import { useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowAll(true);
    }, 3200),
      [];
  });

  return (
    <>
      <Welcome />
      {showAll ? (
        <main className="allSections">
          <Header />
          <Nav setActiveSection={setActiveSection} />
          {activeSection === "Home" ? <Home /> : <></>}
          {activeSection === "Projects" ? <Projects /> : <></>}
          {activeSection === "Info" ? <Info /> : <></>}
          {activeSection === "Contact" ? <Contact /> : <></>}
          {activeSection === "Faq" ? <Faq /> : <></>}
          <About />
          <Footer />
        </main>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
