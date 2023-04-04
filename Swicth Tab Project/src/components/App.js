import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";

import { data } from "../utils/data.js";

const App = () => {
  const [type, setType] = useState("");

  return (
    <div style={{ margin: "20px 20vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "black",
          width: "50vw",
        }}>
        <button onClick={() => setType("mobile")} className="box box1">
          Mobiles
        </button>
        <button onClick={() => setType("laptop")} className="box box1">
          Laptops
        </button>
        <button onClick={() => setType("shirt")} className="box box1">
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
