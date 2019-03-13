import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoimg from "../../img/rapidCAPTURE.png"; // this JS file uses this image
import "../../assets/logo.css"; // Logo.js uses these styles

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <Link to="/">
          <img src={logoimg} alt="RapidCapture Logo" />
        </Link>
      </div>
    );
  }
}

export default Logo;
