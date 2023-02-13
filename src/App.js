import "./App.css";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import Project from "./pages/Project";
import SingleProject from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<SingleProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
