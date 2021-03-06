import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Clients(props) {
  const clients = [...Array(16).keys()]
  const client2 = [...Array(6).keys()]
  return (
    <div>
{/* on mobile */}
<div className="clientsMobile">
<div className="clients d-flex flex-column justify-content-sm-between align-items-center">
   <p className="clients-title">Clients</p>
   <div style={{width:"90%"}}>
   <p className="client-text">We value a great working relationship with our clients above all else. it's why they often come to our parties. It's also why we're able to challenge and inspire them to reach for the stars.</p>
   </div>
   <div className="logos">
   {client2.map((val)=>{
     return <div className="card" style={{width:"38%"}}>
  <img src="/images/nivea_Tekengebied-1.png" className="card-img-top" alt="..."/>
</div>
   })}
   </div>
   </div>
</div>

{/* on desktop */}
<div className="clientsDesktop">
   <div className="clients d-flex flex-column justify-content-sm-between align-items-center">
   <p className="clients-title">Clients</p>
   <div style={{width:"50%"}}>
   <p className="client-text">We value a great working relationship with our clients above all else. it's why they often come to our parties. It's also why we're able to challenge and inspire them to reach for the stars.</p>
   </div>
   <div className="logos">
   {clients.map((val)=>{
     return <div className="card" style={{width:"19%"}}>
  <img src="/images/nivea_Tekengebied-1.png" className="card-img-top" alt="..."/>
</div>
   })}
   </div>
   </div>
</div>

    </div>
  )
}

export default Clients;
