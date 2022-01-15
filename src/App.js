import React from "react";
import "./style.css";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Home />
      <Contact />
      <Aboutus />
    </div>
  );
}
