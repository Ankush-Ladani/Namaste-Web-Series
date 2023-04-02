import { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { FETCH_URL } from "../utils/const";

const App = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const filterRestaurants = () => {
    const result = restaurantList.map((rest) => {
      return Number(rest.data.avgRating);
    });

    // const filtered = result.map((res) => res > 4);

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

  return (
    <>
      <Header />
      <button className="filterBtn" onClick={filterRestaurants}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/57/57164.png"
          alt="filterIcon"
          width="20px"
        />
      </button>
      <Body
        setRestaurantList={setRestaurantList}
        restaurantList={restaurantList}
      />
      <Footer />
    </>
  );
};

export default App;
