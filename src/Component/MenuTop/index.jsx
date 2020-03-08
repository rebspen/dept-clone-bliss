import React from "react";
import "./style.css"

function MenuTop(props) {

  const handleMenu = () => {
    props.operateMenu()
  }

  return (
<div>
<div className="d-flex flex-direction-row justify-content-between">
<p className="logoHome">DEPT</p>
<button onClick={() => handleMenu()} style={{border:"none", background:"Transparent"}}>
<span className="close" style={{color:"white"}}>&#10005;</span>
</button>
</div>
</div>
  );
}

export default MenuTop;
