import React from "react";

const Shimmer = () => {
  return (
    <div style={{ width: "300px", height: "200px" }} className="restaurantCard">
      <div
        style={{
          background: "#f0f0f0",
          color: "white",
          height: "100px",
          content: "",
        }}></div>
      <h3 style={{ background: "#f0f0f0", color: "white", content: "" }}></h3>
      <h6
        style={{
          background: "#f0f0f0",
          content: "",
          color: "white",
          width: "100%",
        }}
        className="cuisines">
        .
      </h6>
      <div
        style={{
          display: "flex",
          color: "white",
          justifyContent: "space-between",
        }}>
        <div style={{ background: "#f0f0f0", width: "90px" }}>.</div>
        <p
          style={{
            background: "#f0f0f0",
            width: "90px",
          }}></p>
        <p style={{ color: "white", background: "#f0f0f0", width: "90px" }}>
          .
        </p>
      </div>
    </div>
  );
};

export default Shimmer;
