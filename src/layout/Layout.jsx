import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavNew from "../components/NavNew.jsx";

const Layout = ({children}) => {
    return (
        <>
            <NavNew/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};

export default Layout;
