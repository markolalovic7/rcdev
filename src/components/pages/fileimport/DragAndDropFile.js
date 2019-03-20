import React, { Component } from "react";
import "../../../assets/dragndrop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports
import ChooseSource from "./ChooseSource";

class DragAndDropFile extends Component {
  render() {
    return (
      <div className="DragAndDropFile">
        <div>
          <ChooseSource />
        </div>
        <label>
          <input type="file" />
          <span>
            <FontAwesomeIcon icon={faFileUpload} />{" "}
            <small>tif, tiff, jpg, png, bmp, gif, pdf</small>
            <br /> <span className="pure-button">Choose files</span>
          </span>
          <br />
          <div className="relative">
            <em>or</em>
          </div>
          <p>
            <b>Drag &amp; Drop your files here</b>
          </p>
        </label>
      </div>
    );
  }
}

export default DragAndDropFile;
