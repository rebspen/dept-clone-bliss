import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
    <h1>Home sweet home ;)</h1>
    <Link to="/work"> Demo work page </Link>
    </div>
  );
}

export default Home;
