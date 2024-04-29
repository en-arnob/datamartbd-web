import { useState } from "react";
import Layout from "./layout/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default App;
