import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Home />
      <About />
      <Footer />
    </>
  );
}

export default App;
