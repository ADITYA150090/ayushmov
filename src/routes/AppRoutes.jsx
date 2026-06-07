import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import About from "../pages/About/About";
import Works from "../pages/Works/WhatIDo";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;