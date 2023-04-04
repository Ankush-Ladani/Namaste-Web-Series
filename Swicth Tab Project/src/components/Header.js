import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "black",
        width: "50vw",
      }}>
      <button className="box box1">Mobiles</button>
      <button className="box box1">Laptops</button>
      <button className="box box1">Shirts</button>
    </div>
  );
};

export default Header;
