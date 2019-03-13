import React, { Component } from "react";
import Logo from "./Logo";
import RightMenu from "./RightMenu";
import "../../assets/header.css"; // Header.js uses these styles

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Logo />
          <RightMenu />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
