import React from "react";
import "./style.css"

function Searchbar(props) {
  return (
    <div class="container">
      <div class="row m-3 mt-4 d-flex flex-row justify-content-end search">
      <p>show me ..</p>
        <form class="col-md-2">
          <select class="select">
            <option>all work</option>
            <option>videos</option>
          </select>
        </form>
        <p>in ..</p>
        <form class="col-md-2">
          <select class="select">
            <option>all industries</option>
            <option>fashion</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
