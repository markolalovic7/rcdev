import React, { Component } from "react";
import "../../assets/navigation.css"; // Navigation.js uses these styles
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // get our fontawesome imports

import Pages from "./Pages";

class Navigation extends Component {
  render() {
    return (
      <div className="navigationWrap">
        <div className="left-menu">
          <div className="menu-icon">
            <FontAwesomeIcon icon={faAlignLeft} />
          </div>
          <nav>
            <Pages />
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
