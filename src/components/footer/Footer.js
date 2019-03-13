import React, { Component } from "react";
import footerlogoimg from "../../img/footer-logo.png";
import "../../assets/footer.css"; // Footer.js uses these styles

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerlogo">
          <img src={footerlogoimg} alt="RapidCapture Logo White" />
        </div>
        <div className="footerinfo">
          <small>
            © Datum Consulting Group - DBA DatumSolutions. All Rights Reserved
          </small>
        </div>
      </div>
    );
  }
}

export default Footer;
