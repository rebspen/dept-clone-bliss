import React from "react";
import HomeTop from "../Component/HomeTop";
import HomeSocial from "../Component/HomeSocial";
import HomeCountries from "../Component/HomeCountries";
import HomeMenu from "../Component/HomeMenu";

function Home() {
  return (
    <div className="home">
      <HomeTop />
      <div className="d-flex flex-row">
      <div className="d-flex flex-column justify-content-around" style={{ maxHeight:"100vh"}}>
        <HomeCountries />
        <HomeSocial />
      </div>
      <div className="homeMenu">
        <HomeMenu />
      </div>
      </div>
    </div>
  );
}

export default Home;
