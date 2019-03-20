import React, { Component } from "react";
import DragAndDropFile from "./DragAndDropFile";
import SelectedFiles from "./SelectedFiles";
import ImportButtons from "./ImportButtons";
import ImportProgress from "./ImportProgress";

class ImportBatch extends Component {
  render() {
    return (
      <div className="ImportBatch">
        <div className="pure-g">
          <div className="DragAndDrop pure-u-1-5">
            <div className="import import-margin">
              <DragAndDropFile />
            </div>
          </div>
          <div className="SelectedFiles pure-u-4-5">
            <div className="import import-margin">
              <SelectedFiles />
            </div>
            <div className="import importProgressWrap">
              <ImportProgress />
            </div>
            <div className="import importButtonsWrap">
              <ImportButtons name="upload all" class="pure-button upload-btn" />
              <ImportButtons
                name="pause all"
                class="pure-button pause-btn no-active"
              />
              <ImportButtons name="remove all" class="pure-button remove-btn" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImportBatch;
