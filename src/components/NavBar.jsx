import React from "react";

const NavBar = ({ icon, val }) => {
  return (
    <div className="nav-section">
      <div className="image">
        <img src={icon} alt="" />
      </div>
      <div className="value">{val}</div>
    </div>
  );
};

export default NavBar;
