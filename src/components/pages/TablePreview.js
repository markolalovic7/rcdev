import React, { Component } from "react";
import "../../assets/table.css"; // Main.js uses these styles
import {
  //faHome,
  faCheck
} from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TablePreview extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th scope="col">Batch name</th>
              <th scope="col">Step</th>
              <th scope="col">Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">bond2_Redacted1.pdf</th>
              <td>Commit</td>
              <td>
                <FontAwesomeIcon icon={faCheck} /> Completed
              </td>
            </tr>
            <tr>
              <th scope="row">TradeSummary.gif</th>
              <td>Commit</td>
              <td>
                <FontAwesomeIcon icon={faCheck} /> Completed
              </td>
            </tr>
            <tr>
              <th scope="row">bond1 - Redacted.jpg</th>
              <td>Commit</td>
              <td>
                <FontAwesomeIcon icon={faCheck} /> Completed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TablePreview;
