import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";

class RightMenu extends Component {
  render() {
    return (
      <div className="RightMenu">
        <ul>
          <li>
            <Link to="#">All ingestors selected</Link>
          </li>
          <li>
            <Link to="#">Console</Link>
          </li>
          <li>
            <Link to="#">Reconcile</Link>
          </li>
          <li className="notification">
            <Link to="#">
              <FontAwesomeIcon icon={faBell} />
              <span>Notification</span>
            </Link>
          </li>
          <li className="user">
            <Link to="#">
              <FontAwesomeIcon icon={faUser} />
              <span>User</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default RightMenu;
