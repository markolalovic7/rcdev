import React, { Component } from "react";
import "../../../assets/importprogress.css";

class ImportProgress extends Component {
  render() {
    return (
      <div className="ImportProgress">
        <div className="progress-container">
          <div className="progressbar">
            <span>20%</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ImportProgress;
