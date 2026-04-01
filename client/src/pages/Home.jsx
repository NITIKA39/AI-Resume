import React from "react";
import Banner from "../components/Home/Banner";   // Match exact folder & file name
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";

const Home = () => {
    return (
        <div>
           <Banner />
           <Hero />
           <Features />
        </div>
    );
}

export default Home;