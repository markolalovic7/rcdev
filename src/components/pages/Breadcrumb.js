import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../../assets/breadcrumb.css";

const Breadcrumb = props => {
  return (
    <div>
      <ul>
        <li>
          <Link to={props.pagelink}>
            <FontAwesomeIcon icon={faHome} /> {props.pagename}{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
