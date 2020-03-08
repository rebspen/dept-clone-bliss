import React from "react";
import "./style.css"

function Searchbar(props) {
  return (
<div>
<div className="container mobilesearchbar">
      <div className="row ml-4 d-flex flex-column justify-content-start search">
      <div className="d-flex flex-row">
      <p>show me</p>
        <form className="col-md-0">
          <select className="select">
            <option>all work</option>
            <option>videos</option>
          </select>
        </form>
      </div>
      <div className="d-flex flex-row">
        <p>in </p>
        <form className="col-md-0">
          <select className="select">
            <option>all industries</option>
            <option>fashion</option>
          </select>
        </form>
      </div>
      </div>
    </div>

    <div className="container searchbar">
      <div className="row m-3 mt-4 d-flex flex-row justify-content-end search">
      <p>show me</p>
        <form className="col-md-2">
          <select className="select" >
            <option>all work</option>
            <option>videos</option>
          </select>
        </form>
        <p>in</p>
        <form className="col-md-2">
          <select className="select">
            <option>all industries</option>
            <option>fashion</option>
          </select>
        </form>
      </div>
    </div>
</div>
  );
}

export default Searchbar;
