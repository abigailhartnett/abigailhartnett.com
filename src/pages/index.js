import React from "react";
import { createClient } from "contentful";
import ProjectIndex from "../components/ProjectIndex";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import Hero from "../components/Hero";

export async function getStaticProps() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({ content_type: "textBlock" });

    console.log("Contentful API Response:", res);

    return {
      props: {
        content: res.items || [],
      },
    };
  } catch (error) {
    console.error("Error fetching Contentful entries:", error);
    return {
      props: {
        content: [],
      },
    };
  }
}

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
