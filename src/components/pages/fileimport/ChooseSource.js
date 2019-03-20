import React, { Component } from "react";

class ChooseSource extends Component {
  render() {
    return (
      <div className="ChooseSource">
        <select>
          <option value="default">Choose source</option>
          <option value="1">1. Cognitive ingestion</option>
          <option value="2">2. Cognitive recognize</option>
          <option value="3">3. Regular ingestion</option>
        </select>
      </div>
    );
  }
}

export default ChooseSource;
