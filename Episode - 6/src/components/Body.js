import RestaurantCard from "./RestaurantCard";
import { FETCH_URL } from "../utils/const";
import { useState, useEffect } from "react";
const Body = () => {
  // console.log(restaurantList);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const filterRestaurants = () => {
    const newList = restaurantList.filter((rest) => {
      return rest.data.avgRating > 4;
    });
    setRestaurantList(newList);
  };

  useEffect(() => {
    const startFetching = async () => {
      const response = await fetch(FETCH_URL);
      const data = await response.json();
      setRestaurantList(data?.data?.cards[2]?.data?.data?.cards);
    };

    startFetching();
  }, []);

  const handleSearch = (val) => {
    const newList = restaurantList.filter((restaurant) => {
      let nameOfRestaurant = restaurant.data.name.toLowerCase();
      return nameOfRestaurant.includes(val);
    });

    setRestaurantList(newList);
  };

  return (
    <div className="body">
      <div className="searchContainer">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          className="inputBox"
          type="text"
          placeholder="Search Food Item"
        />
        <button
          onClick={() => handleSearch(searchValue.toLowerCase())}
          className="searchBtn">
          Search
        </button>
      </div>
      <button className="filterBtn" onClick={filterRestaurants}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/57/57164.png"
          alt="filterIcon"
          width="20px"
        />
      </button>
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