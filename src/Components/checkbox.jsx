import React from 'react';
import "../checkbox.css";

function Checkbox() {
    return (
     <div className="labelcontainer"> <label className="container">
        <input type="checkbox" required/> 
        <div className="checkmark"></div>
      </label>
      <p>I read and agree to the <a>Terms & Conditions</a></p></div>
    );
}

export default Checkbox