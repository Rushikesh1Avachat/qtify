import React from "react";
import LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    // Style this wrapper or the image directly to ensure it fits the height
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={LogoImage} alt="logo" width={67} />
    </div>
  );
};

export default Logo;
