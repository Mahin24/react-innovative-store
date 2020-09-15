import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Home page/Service";
import Featured from "../components/Home page/Featured";
export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          Our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
