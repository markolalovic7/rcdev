import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FilterInput extends Component {
  render() {
    return (
      <div className="FilterInput">
        <input
          className="search"
          type="search"
          name="search"
          placeholder="Filter batches"
        />
        <label className="searchsubmitWrap">
          <input className="searchsubmit" type="submit" value=" " />
          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </label>
      </div>
    );
  }
}

export default FilterInput;
