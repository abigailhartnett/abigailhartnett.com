import React from "react";
import ProjectIndex from "../components/ProjectIndex";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const HomePage = ({ content }) => {
  console.log(content);
  return (
    <div className="container">
      <header></header>
      <main>
        <Hero />
        <div className="content">
          <ProjectIndex />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
