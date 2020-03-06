import React from "react";

function Searchbar(props) {
  return (
    <div class="container">
      <div class="row m-3 d-flex flex-row justify-content-end">
      <p>show me ..</p>
        <form class="col-md-3">
          <select class="form-control">
            <option>all work</option>
            <option>videos</option>
          </select>
        </form>
        <p>in ..</p>
        <form class="col-md-3">
          <select class="form-control select2">
            <option>all industries</option>
            <option>fashion</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
