import React, { Component } from "react";
import { CircularAvatar, SquareAvatar } from "./CardAvatar";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import "./horizontalCard.css";
import "./verticalCard.css";

export class HorizontalCard extends Component {
  render() {
    return (
      <div className="horizontal-card-container">
        <CircularAvatar />
        <CardContent cardType="horizontal">
          <h4 className="horizontal-card-content-title">Shiny Rappers</h4>
          <hr />
          <CardFooter cardType="horizontal" />
        </CardContent>
      </div>
    );
  }
}

export class VerticalCard extends Component {
  render() {
    return (
      <div className="vertical-card-container">
        <SquareAvatar />
        <CardContent cardType="vertical">
          <div className="vertical-card-title-box">
            <h3 className="vertical-card-title">Shiny Rappers</h3>
            <p className="author">by Tyga</p>
          </div>
          <hr />
          <CardFooter cardType="vertical" />
        </CardContent>
      </div>
    );
  }
}
