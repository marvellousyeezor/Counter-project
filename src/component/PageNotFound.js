import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import emoji from "../assets/emoji.png"

function PageNotFound() {
    return (
      <section className="container">
        <div className="cover">
        <Navbar/>
        <div className= 'notfound'><img src={emoji} alt='Error' id="missing"></img></div>
        <h2 className= 'header'>Error 404</h2>
        <h2 className= 'subheader'>Page Not Found</h2>
        <p className= 'content'>The page you are looking for doesn't exist or has been removed.</p>
        </div>
      </section>
    );
  }
  
  export default PageNotFound;
  