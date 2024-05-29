import {useEffect, useState} from "react";
import Layout from "./layout/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeSections from "./components/HomeSections";

function App() {
    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
    }, [ ])
  return (
    <Layout>
      <Hero />
      <HomeSections />
    </Layout>
  );
}

export default App;
