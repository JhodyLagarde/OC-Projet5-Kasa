import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/home";
import Apropos from "./pages/a-propos"
import Header from "./components/header";
import Footer from "./components/footer"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Apropos />} />
      </Routes> */}
      <Footer />
    </Router>
  </React.StrictMode>
);
