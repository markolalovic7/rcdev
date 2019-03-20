import React from "react";
import "../../../assets/progresstatus.css";

const ProgressStatus = props => {
  return (
    <div className="progress">
      <span className={props.status}>{props.status}</span>
    </div>
  );
};

export default ProgressStatus;
