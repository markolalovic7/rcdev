import React, { Component } from "react";

import { faFileImport } from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports
import "../../../assets/fileimport.css";
//import ChooseSource from "./ChooseSource";
//import { Link } from "react-router-dom";

import Breadcrumb from "../Breadcrumb";
import ImportBatch from "./ImportBatch";

class FileImport extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="breadcrumb">
          <Breadcrumb
            bcicon={faFileImport}
            pagelink="/fileimport"
            pagename="File Import"
          />
        </div>
        <div className="main">
          <div className="content">
            <div className="wrap">
              <div className="FileImport">
                {/*<div className="import">
                  <div>
                    <ChooseSource />
                  </div>
                </div>*/}
                <div className="importbatchWrap">
                  <div className="importbatch">
                    <ImportBatch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FileImport;
