import React, { Component } from "react";

import { faFileInvoice } from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports
import "../../../assets/dashboard.css"; // Dashboard.js uses these styles

import Breadcrumb from "../Breadcrumb";
import Tabs from "./Tabs";
import ProgressTable from "./ProgressTable";
import CompletedBatches from "./CompletedBatches";
import FilterBatches from "./FilterBatches";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="breadcrumb">
          <Breadcrumb
            bcicon={faFileInvoice}
            pagelink="/dashboard"
            pagename="Dashboard"
          />
        </div>
        <div className="main">
          <div className="content">
            <div className="wrap">
              <div className="Dashboard">
                <Tabs>
                  <div label="Dashboard">
                    <FilterBatches />
                    <div className="ProgressTableWrap table-wrap">
                      <ProgressTable />
                    </div>
                  </div>
                  <div label="Completed Batches">
                    <FilterBatches />
                    <div className="CompletedBatchesWrap table-wrap">
                      <CompletedBatches />
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
