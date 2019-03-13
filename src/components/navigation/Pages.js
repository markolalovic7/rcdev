import React, { Component } from "react";
import Page from "./Page";
import {
  faHome,
  faFileImport,
  faEdit,
  faCheckSquare,
  faCheckDouble,
  faHdd,
  faFileInvoice,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports

class Pages extends Component {
  render() {
    return (
      <ul>
        <Page name="home" pagelink="/" icon={faHome} />
        <Page name="file import" pagelink="fileimport" icon={faFileImport} />
        <Page name="assembly" pagelink="assembly" icon={faEdit} />
        <Page name="indexing" pagelink="indexing" icon={faCheckSquare} />
        <Page
          name="commit review"
          pagelink="commitreview"
          icon={faCheckDouble}
        />
        <Page name="batch Log" pagelink="batchLog" icon={faHdd} />
        <Page name="dashboard" pagelink="dashboard" icon={faFileInvoice} />
        <Page
          name="denied documents"
          pagelink="denieddocuments"
          icon={faMinusCircle}
        />
      </ul>
    );
  }
}

export default Pages;
