import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Page = props => {
  return (
    <li>
      <Link to={props.pagelink}>
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.name}</span>
      </Link>
    </li>
  );
};

export default Page;
