import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/features/Preloader";
import NavBar from "./components/Navbar";
import ScrollToTop from "./components/features/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import profileData from "./data/profile_details.json";
import projectData from "./data/project_data.json";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home profileData={profileData} />} />
          <Route path="/port-bk" element={<Home profileData={profileData} />} />
          <Route path="/project" element={<Projects projectData={projectData}/>} />
          <Route path="/about" element={<About  profileData={profileData}/>} />
          <Route path="/resume" element={<Resume profileData={profileData}/>} />
        </Routes>
        <Footer profileData={profileData}/>
      </div>
    </Router>
  );
}

export default App;
