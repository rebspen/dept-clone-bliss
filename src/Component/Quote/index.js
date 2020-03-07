import React from "react";
import "./style.css";

function Quote() {
  return (
    <div>
    {/* on mobile */}
    <div className="quoteMobile">
    <div style={{ borderTop: "1px solid #a3a3a3" }}>
      <p className="quote">
        "Dept helped us tell our story though a bold new identity amd a robust
        online experience. to the tune of 60% growth in online bookings in just
        one month."
      </p>
      <p className="client">MATTIJS TEN BRINK - CEO, TRANSAVIA</p>
    </div>
    </div>

    {/* on desktop */}
    <div className="quoteDesktop" style={{ borderTop: "1px solid #a3a3a3" }}>
    <div className= "m-5">
      <p className="quote">
        "Dept helped us tell our story though a bold new identity amd a robust
        online experience. to the tune of 60% growth in online bookings in just
        one month."
      </p>
      <p className="client">MATTIJS TEN BRINK - CEO, TRANSAVIA</p>
    </div>
    </div>

    </div>
  );
}

export default Quote;
