import React from "react";

export const CircularAvatar = (props) => {
  return (
    <div className="horizontal-card-avatar-box">
      <div className="horizontal-card-avatar">
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  );
};

export const SquareAvatar = (props) => {
  return (
    <div className="vertical-card-avatar-box">
      <img src={props.image} alt={props.alt} />
      <span className="price">{props.price}</span>
    </div>
  );
};
