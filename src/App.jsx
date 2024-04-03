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
  return (
    <>
      <Header />
      <Nav />
      <Home />
      <Projects />
      <Info />
      <Contact />
      <Faq />
      <About />
      <Footer />
    </>
  );
}

export default App;
