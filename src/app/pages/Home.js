import React from "react";
import Lottie from "lottie-react";
import "./home.css";

function Home() {
    return (
        <>
        <div className="all">
        <div className="lottie">
            <Lottie animationData={require("../images/hero.json")} />
            
            </div>
            <h1>YOUR BOOK WATING FOR AINA <span>.</span> </h1>
            </div>
            
        </>
    );
}

export default Home;
