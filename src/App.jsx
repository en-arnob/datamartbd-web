import { useState } from "react";
import Layout from "./layout/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeSections from "./components/HomeSections";

function App() {
  return (
    <Layout>
      <Hero />
      <HomeSections />
    </Layout>
  );
}

export default App;
