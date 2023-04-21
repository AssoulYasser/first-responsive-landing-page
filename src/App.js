import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FWTO from "./components/FWTO";
import LFP from "./components/LFP";
import Partenrs from "./components/Partenrs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return <div>
        <NavBar/>
        <Hero/>
        <Features/>
        <FWTO/>
        <LFP/>
        <Partenrs/>
        <Testimonials/>
        <Pricing/>
        <Contact/>
        <Footer/>
    </div>;
}

export default App;
