import React from "react";
import ProjectIndex from "../components/ProjectIndex";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import Hero from "../components/Hero";

const HomePage = ({ content }) => {
  console.log(content);
  return (
    <div className="container">
      <header></header>
      <main>
        <TopNav />
        <Hero />
        <ProjectIndex />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
