import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Footer() {
  return (
<div className="footer">
<div className="top">
  <p className="logo">DEPT</p>
  <div className="list">
<Link className="linkft">WORK</Link>
<Link className="linkft">SERVICE</Link>
<Link className="linkft">STORIES</Link>
<Link className="linkft">ABOUT</Link>
<Link className="linkft">CAREERS</Link>
<Link className="linkft">CONTACT</Link>
  </div>
  <br></br>
<Link className="linkft">f</Link>
<Link className="linkft">t</Link>
<Link className="linkft">i</Link>
</div>
<div className="bottom">
  <p>Chamber of Commerce: 63464101</p>
  <p>VAT: NL 8552.47.502.B01</p>
  <p>Terms and conditions</p>
  <p>@ 2018 Dept Agency</p>
</div>

</div>
  );
}

export default Footer;
