import React, { Component } from "react";
import ChackboxLast100 from "./ChackboxLast100";
import CreatedDate from "./CreatedDate";
import FilterInput from "./FilterInput";

class FilterBatches extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="FilterBatches">
          <form>
            <div className="form">
              <FilterInput />
              <CreatedDate />
              <ChackboxLast100 />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default FilterBatches;
