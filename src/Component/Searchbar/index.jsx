import React from "react";
import "./style.css"

function Searchbar(props) {
  return (
<div>
<div class="container mobilesearchbar">
      <div class="row ml-4 d-flex flex-column justify-content-start search">
      <div class="d-flex flex-row">
      <p>show me</p>
        <form class="col-md-0">
          <select>
            <option>all work</option>
            <option>videos</option>
          </select>
        </form>
      </div>
      <div class="d-flex flex-row">
        <p>in </p>
        <form class="col-md-0">
          <select>
            <option>all industries</option>
            <option>fashion</option>
          </select>
        </form>
      </div>
      </div>
    </div>

    <div class="container searchbar">
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
</div>
  );
}

export default Searchbar;
