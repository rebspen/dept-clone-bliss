import React from "react";
import Header from "./../Component/Header";
import Searchbar from "./../Component/Searchbar";
import Case from "./../Component/Case";
import CaseLargeLeft from "../Component/CaseLargeLeft";
import CaseLargeRight from "../Component/CaseLargeRight";
import Quote from "../Component/Quote";
import Clients from "../Component/Clients";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer"
import "./views.css";
import cases from "./cases"

function Work() {
  console.log("here", cases)
  return (
    <div>
      <Header />
      <Searchbar />
      <div className="mainContent">
        <Case val= {cases[0]}/>
        <Case val= {cases[1]}/>
        <Case val= {cases[2]}/>
        <Case val= {cases[3]}/>
        <CaseLargeLeft val= {cases[4]} />
        <Case val= {cases[5]} />
        <Case val= {cases[6]} />
        <CaseLargeRight val= {cases[7]} />
        <Case val= {cases[8]} />
        <Case val= {cases[9]} />
        <Case val= {cases[10]} />
        <Case val= {cases[11]} />
        <Quote />
        <Case val= {cases[12]} />
        <Case val= {cases[13]} />
      </div>
      <Clients />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Work;
