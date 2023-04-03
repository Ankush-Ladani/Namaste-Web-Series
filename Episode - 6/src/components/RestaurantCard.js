import { IMAGE_URL } from "../utils/const";

const RestaurantCard = (restaurant) => {
  // console.log(restaurant);
  const { data } = restaurant.restaurant;

  const { name, cuisines, avgRating, costForTwoString, cloudinaryImageId } =
    data;

  const { deliveryTime } = data.sla;
  return (
    <div className="restaurantCard">
      <img
        className="foodImage"
        src={`${IMAGE_URL}${cloudinaryImageId}`}
        alt=""
      />
      <h3>{name}</h3>
      <h6 className="cuisines">{cuisines.join(" , ")}</h6>
      <div className="detaisDiv">
        <span className="ratingDiv">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
            alt="star"
            width="20px"
            className="starImage"
          />
          {avgRating}
        </span>
        <p>{deliveryTime}</p>
        <p>{costForTwoString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
