import React from "react";
import { data } from "../utils/data";
const Body = () => {
  return (
    <div>
      <ul style={{ marginLeft: "18vw", marginTop: "50px" }} className="listUl">
        {data.map((item) => {
          return (
            <li className="listItem listBox" key={item.id}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Body;
