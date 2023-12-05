import React from "react";
import NavBar from "../components/NavBar";
import ProjectIndex from "../components/ProjectIndex";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

const HomePage = () => {
  return (
    <div className="container">
      <header></header>
      <main>
        <TopNav />
        <Hero />
        <NavBar />
        <ProjectIndex />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
