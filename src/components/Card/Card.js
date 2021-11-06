import React, { Component } from "react";
import { CircularAvatar, SquareAvatar } from "./CardAvatar";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import "./horizontalCard.css";
import "./verticalCard.css";

export class HorizontalCard extends Component {
  render() {
    const {
      name,
      avatarImage,
      footerLTitle,
      footerLValue,
      footerRTitle,
      footerRValue,
    } = this.props;
    return (
      <div className="horizontal-card-container">
        <CircularAvatar image={avatarImage} alt={name} />
        <CardContent cardType="horizontal">
          <h4 className="horizontal-card-content-title">{name}</h4>
          <hr />
          <CardFooter
            cardType="horizontal"
            leftTitle={footerLTitle}
            leftValue={footerLValue}
            rightTitle={footerRTitle}
            rightValue={footerRValue}
          />
        </CardContent>
      </div>
    );
  }
}

export class VerticalCard extends Component {
  render() {
    const {
      name,
      avatarImage,
      price,
      footerLTitle,
      footerLValue,
      footerRTitle,
      footerRValue,
    } = this.props;
    return (
      <div className="vertical-card-container">
        <SquareAvatar image={avatarImage} alt={name} price={price || "$500"} />
        <CardContent cardType="vertical">
          <div className="vertical-card-title-box">
            <h3 className="vertical-card-title">Shiny Rappers</h3>
            <p className="author">by Tyga</p>
          </div>
          <hr />
          <CardFooter
            cardType="vertical"
            leftTitle={footerLTitle || "Drops in"}
            leftValue={footerLValue}
            rightTitle={footerRTitle || "Mint Amount"}
            rightValue={footerRValue}
          />
        </CardContent>
      </div>
    );
  }
}
