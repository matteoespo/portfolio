import React from "react";
import Navbar from "./components/Navbar";
import Particle from "./components/Particle";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
//import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer";
/*import Resume from "./components/Resume/ResumeNew";*/
/* import ScrollToTop from "./components/ScrollToTop"; */
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Particle />
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="project"><Projects /></div>
      {/* <div id="resume"><Resume /></div> */}
      <Footer />
    </div>
  );
}

export default App;
