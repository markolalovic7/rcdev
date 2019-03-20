import React from "react";
import "../../../assets/importbuttons.css";

const ImportButtons = props => {
  return (
    <React.Fragment>
      <button className={props.class}>{props.name}</button>
    </React.Fragment>
  );
};

export default ImportButtons;
