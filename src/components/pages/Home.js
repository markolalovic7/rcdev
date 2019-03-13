import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Aside from "../aside/Aside"; // Aside.js uses these styles
import "../../assets/home.css"; // Main.js uses these styles
import Homepageblock from "./Homepageblock";
import DashboardChart from "./DashboardChart";
//import fileimportimg from "../../img/FileImportIcon.png";
//import assemblyimg from "../../img/AssemblyIcon.png";
//import indexingimg from "../../img/IndexingIcon.png";
//import commitreviewimg from "../../img/CommitReviewIcon.png";
//import batchlogimg from "../../img/CommitIcon.png";
//import dashboardimg from "../../img/dashboardIcon.png";
//import denieddocumentsimg from "../../img/DeniedDocumentsIcon.png";

import {
  //faHome,
  faFileImport,
  faEdit,
  faCheckSquare,
  faCheckDouble,
  faHdd,
  faFileInvoice,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="wrap">
            <div className="flex-grid">
              <Link to="/fileimport" className="fileimport">
                <Homepageblock
                  tagname="file import"
                  //imagelink={fileimportimg}
                  icon={faFileImport}
                  number={23.902}
                  //numbertxt="Files imported"
                  description="tif | tiff | jpg | png | bmp | gif | pdf"
                />
              </Link>
              <Link to="/assembly" className="assembly">
                <Homepageblock
                  tagname="manual assembly"
                  number={31.112}
                  numbertxt="Total batches"
                  icon={faEdit}
                  description="Batch Name |	Batch Number | Creation Date |	User |	Progress"
                />
              </Link>
              <Link to="/indexing" className="indexing">
                <Homepageblock
                  tagname="manual indexing"
                  numbertxt="Manual indexing | Validation failed"
                  icon={faCheckSquare}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Link>
              <Link to="/commitreview" className="commitreview">
                <Homepageblock
                  tagname="commit review"
                  number={11.102}
                  numbertxt="Batch documents"
                  icon={faCheckDouble}
                  description="Batch name | Documents | Doc. class name | Creation | User"
                />
              </Link>
              <Link to="/batchlog" className="batchlog">
                <Homepageblock
                  tagname="batch log"
                  number={1.112}
                  numbertxt="Search batches"
                  icon={faHdd}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Link>
              <Link to="/denieddocuments" className="denieddocuments">
                <Homepageblock
                  tagname="denied documents"
                  number={112}
                  icon={faMinusCircle}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Link>
              <Link to="/dashboard" className="dashboard">
                <Homepageblock
                  tagname="dashboard"
                  number={12.479}
                  numbertxt="Dashboard | Completed batches"
                  icon={faFileInvoice}
                  description="Lorem ipsum dolor sit amet,sdds consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Link>
              <Link to="#" className="statistics">
                <h2>Statistics</h2>
                <DashboardChart />
              </Link>
            </div>
          </div>
        </div>
        {/*<Aside />*/}
      </div>
    );
  }
}

export default Home;
