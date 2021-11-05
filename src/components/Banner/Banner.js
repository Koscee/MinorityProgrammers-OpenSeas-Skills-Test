import React from "react";
import "./banner.css";

class Banner extends React.Component {
  /* TODO: create state for the <h1> and <p> contentent  */

  render() {
    return (
      <div
        className="banner"
        style={{ backgroundImage: 'url("images/banner.jpg")' }}
      >
        <div className="banner-content">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Banner;
