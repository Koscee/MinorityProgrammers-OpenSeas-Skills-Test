import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="MusiSWAP logo" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
