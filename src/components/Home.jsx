import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Destacado from "./Destacado";

const Home = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Destacado />
            <Footer />
        </div>
    )
}

export default Home;