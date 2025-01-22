import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Team from "./components/Team";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Customers />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
