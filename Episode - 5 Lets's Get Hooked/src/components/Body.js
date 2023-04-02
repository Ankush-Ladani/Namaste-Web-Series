import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = ({ restaurantList, setRestaurantList }) => {
  // console.log(restaurantList);
  // console.log(setRestaurantList());

  const [boolValues, setBoolValues] = useState([]);

  // const filterRestaurants = () => {
  //   restaurantList
  //     .map((restaurant) => Object.values(restaurant)[1].avgRating)
  //     .filter((x) => boolValues.push(x > 4));
  // };

  return (
    <div className="body">
      <div className="searchContainer">
        <input
          className="inputBox"
          type="text"
          placeholder="Search Food Item"
        />
        <button className="searchBtn">Search</button>
      </div>

      <div className="restaurantContainer">
        {restaurantList.length != 0 &&
          restaurantList.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant?.data?.id}
                restaurant={restaurant}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Body;
