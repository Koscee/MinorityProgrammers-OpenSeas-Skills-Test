import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src="images/logo.png" alt="MusiSWAP logo" />
        </div>
      </header>
    );
  }
}

export default Header;
