import React, { Component } from "react";

class ChackboxLast100 extends Component {
  render() {
    return (
      <div className="ChackboxLast100">
        <label>
          <input type="checkbox" name="last100" />
          <span>Last 100</span>
        </label>
      </div>
    );
  }
}

export default ChackboxLast100;
