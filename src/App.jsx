import "./App.css";

import Header from "./components/header.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-[#06B9F5] font-body">
      test
        <Header />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;