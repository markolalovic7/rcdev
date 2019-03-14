import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import { faFileImport } from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports
import "../../assets/dashboard.css"; // Main.js uses these styles

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="breadcrumb">
          <Breadcrumb bcicon={faFileImport} pagelink="/" pagename="Homepage" />
        </div>
        <div className="main">
          <div className="content">
            <div className="wrap">
              <div className="Dashboard">...</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
