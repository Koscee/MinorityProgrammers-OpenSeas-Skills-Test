import React from "react";

export const CircularAvatar = () => {
  return (
    <div className="horizontal-card-avatar-box">
      <div className="horizontal-card-avatar">
        <img
          src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export const SquareAvatar = () => {
  return (
    <div className="vertical-card-avatar-box">
      <img
        src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt="avatar"
      />
      <span className="price">$500</span>
    </div>
  );
};
