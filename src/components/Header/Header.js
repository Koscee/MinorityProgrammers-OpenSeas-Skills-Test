import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src="images/logo.png" alt="MusiSWAP logo" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
