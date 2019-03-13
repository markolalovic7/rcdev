import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepageblock = props => (
  <div className="Homepageblock">
    <div className="imagelink">
      {/* <img src={props.imagelink} alt={props.tagname} /> */}
      <FontAwesomeIcon icon={props.icon} />
    </div>
    <div className="tagname">
      <h2>{props.tagname}</h2>
    </div>
    <div className="numberInfo">
      <span>
        {props.number} <small>{props.numbertxt}</small>
      </span>
    </div>
    <div className="description">
      <p>{props.description}</p>
    </div>
  </div>
);

export default Homepageblock;
