import React from "react";
import "./style.css"

function Contact() {
  return (
    <div className=" mt-5 mb-5 d-flex flex-row justify-content-sm-end align-items-center">
      <div className="m-1" style= {{width:"30%"}}>
        <p className="help">QUESTION? <br></br>WE ARE HERE <br></br>TO HELP!</p>
      </div>
      <div class=" name m-1 p-3 d-flex flex-column justify-content-sm-start align-items-start" style= {{width:"30%"}}>
        <label>NAME</label>
        <input type="text"></input>
        <br></br>
        <label>MESSAGE</label>
        <textarea></textarea>
        <br></br>
        <br></br>
        <button className="btnBlue">SEND</button>
      </div>
      <div className=" m-1 d-flex flex-column justify-content-sm-start align-items-start"  style= {{width:"30%"}}>
        <label>EMAIL</label>
        <input type="text"></input>
        <p className=" m-1 required">ths field is required</p>
      </div>
    </div>
  );
}

export default Contact;
