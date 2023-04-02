const React = require("react");
const ReactDOM = require("react-dom");

import Logo from "./Assets/website-logo.png";

const data = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "38230",
      name: "Shivam Bhojnalay",
      uuid: "ccd83d5b-95a9-4b6b-b709-099ddbb01b53",
      city: "10",
      area: "Ahmedabad",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "dryrg4zspcdmpbzdvtfp",
      cuisines: [
        "Thalis",
        "Punjabi",
        "Gujarati",
        "North Indian",
        "Rajasthani",
        "Desserts",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 6.800000190734863,
      slugs: {
        restaurant: "shivam-bhojnalay-gurukul-vastrapur",
        city: "ahmedabad",
      },
      cityState: "10",
      address: "Ground Floor, JB Towers, Drive In Road, Gurukul, Ahmedabad",
      locality: "Gurukul",
      parentId: 183566,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5400,
        message: "",
        title: "Delivery Charge",
        amount: "5400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6373120~p=1~eid=00000187-3d78-72e8-126a-8b1900b00167",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "38230",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 6.800000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.7",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="website-logo" width="100px" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({
  name,
  cuisines,
  deliveryTime,
  avgRating,
  price,
  imageId,
}) => {
  return (
    <div className="restaurantCard">
      <img
        className="foodImage"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`}
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
        <p>{price}</p>
      </div>
    </div>
  );
};

const Body = () => {
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
        <RestaurantCard
          name={data[0].data.name}
          cuisines={data[0].data.cuisines}
          deliveryTime={data[0].data.slaString}
          avgRating={data[0].data.avgRating}
          price={data[0].data.costForTwoString}
          imageId={data[0].data.cloudinaryImageId}
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return <h1></h1>;
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
