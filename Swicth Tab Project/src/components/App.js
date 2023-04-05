import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";

import { data } from "../utils/data.js";

const App = () => {
  const [type, setType] = useState("");

  const [style, setStyle] = useState({
    mob: false,
    lap: false,
    shi: false,
  });

  const handleMobile = () => {
    setType("mobile");
    setStyle({ lap: false, shi: false, mob: true });
  };

  const handleLaptop = () => {
    setType("laptop");
    setStyle({ mob: false, shi: false, lap: true });
  };

  const handleShirt = () => {
    setType("shirt");
    setStyle({ mob: false, shi: true, lap: false });
  };

  return (
    <div style={{ margin: "20px 20vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "black",
          width: "50vw",
        }}>
        <button
          style={{ boxShadow: style.mob && "0px 3px 5px yellow" }}
          onClick={handleMobile}
          className="box box1">
          Mobiles
        </button>
        <button
          style={{ boxShadow: style.lap && "0px 3px 5px yellow" }}
          onClick={handleLaptop}
          className="box box1">
          Laptops
        </button>
        <button
          style={{ boxShadow: style.shi && "0px 3px 5px yellow" }}
          onClick={handleShirt}
          className="box box1">
          Shirts
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h1>ALL ITEMS</h1>
          <ul style={{ marginTop: "50px" }} className="listUl">
            {data.map((item) => {
              return (
                <li className="listItem listBox" key={item.id}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h1 style={{ marginLeft: "21vw" }}> {type} </h1>
          <ul
            style={{ marginLeft: "18vw", marginTop: "50px" }}
            className="listUl">
            {data
              .filter((item) => item.type == type)
              .map((item) => {
                return (
                  <li className="listItem listBox" key={item.id}>
                    {item.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
