import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Footer() {
  return (
 <div>
 {/* footer mobile */}
 <div className="footerMobile">
<div className="top">
  <div className="list">
<Link className="linkft">WORK</Link>
<Link className="linkft">SERVICE</Link>
<Link className="linkft">STORIES</Link>
<Link className="linkft">ABOUT</Link>
<Link className="linkft">CAREERS</Link>
<Link className="linkft">CONTACT</Link>
  </div>
 
  <div className="sociallist">
<Link className="linkft"><img className="social" src = "images/facebook.png" /></Link>
<Link className="linkft"><img className="social" src = "images/twitter.png" /></Link>
<Link className="linkft"><img className="social" src = "images/instagram.png" /></Link>
  </div>
</div>
<div className="bottom">

  <p>Chamber of Commerce: 63464101</p>
  <p>VAT: NL 8552.47.502.B01</p>
  <p>Terms and conditions</p>

  <p className="mt-5">@ 2018 Dept Agency</p>
</div>

</div>
 
{/* footer desktop */}
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
  <div>
<Link className="linkft"><img className="social" src = "images/facebook.png" /></Link>
<Link className="linkft"><img className="social" src = "images/twitter.png" /></Link>
<Link className="linkft"><img className="social" src = "images/instagram.png" /></Link>
  </div>
</div>
<div className="bottom">

  <p>Chamber of Commerce: 63464101</p>
  <p>VAT: NL 8552.47.502.B01</p>
  <p>Terms and conditions</p>

  <p className="ml-5">@ 2018 Dept Agency</p>
</div>

</div>
 </div>   
  );
}

export default Footer;
