import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="header-logo"
          src="https://ik.imagekit.io/acrrubsd0/Untitled%20design.png?updatedAt=1770381393453"
        />
      </div>

      <div className="search-bar">
        <input placeholder="Search For Restaurants and Food" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  {
    /* 
        
      let props = {
  
              resDetail: {
    id: "40377",
    resName: "Lucky Restaurant",
    cuisine: ["Biryani", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 36,
    costForTwo: "₹300 for two",
    imgId: "uvapcfajlsbctskdhuhl",
    location: "Santosh Nagar",
  },
        }
        
        */
  }

  const restaurantObj = props.resDetail;

  // {
  //   id: "40377",
  //   resName: "Lucky Restaurant",
  //   cuisine: ["Biryani", "Tandoor"],
  //   avgRating: 4.3,
  //   delieveryTime: 36,
  //   costForTwo: "₹300 for two",
  //   imgId: "uvapcfajlsbctskdhuhl",
  //   location: "Santosh Nagar",
  // }

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantObj.imgId}`}
        />
      </div>
      <h3 className="res-title">{restaurantObj.resName}</h3>
      <h4>{restaurantObj.cuisine}</h4>
      <h4>⭐️ {restaurantObj.avgRating} Stars</h4>
      <h4>
        {restaurantObj.delieveryTime} mins | {restaurantObj.costForTwo}
      </h4>
    </div>
  );
};

const restaurantsArr = [
  {
    id: "40377",
    resName: "Lucky Restaurant",
    cuisine: ["Biryani", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 36,
    costForTwo: "₹300 for two",
    imgId: "uvapcfajlsbctskdhuhl",
    location: "Santosh Nagar",
  },
  {
    id: "79706",
    resName: "Shah Ghouse Hotel & Restaurant",
    cuisine: ["Biryani", "Chinese", "Mughlai", "Tandoor"],
    avgRating: 4.4,
    delieveryTime: 30,
    costForTwo: "₹350 for two",
    imgId: "ggbuknqzqc4qoqfnl2cr",
    location: "Charminar",
  },
  {
    id: "150646",
    resName: "Cream Stone Ice Cream",
    cuisine: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
    avgRating: 4.4,
    delieveryTime: 30,
    costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/de4e5459-06d1-4249-bf8f-7e9277fb5035_150646.JPG",
    location: "Himayath Nagar",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard resDetail={restaurantsArr[0]} />
        <RestaurantCard resDetail={restaurantsArr[1]} />
        <RestaurantCard resDetail={restaurantsArr[2]} />

        {/* 
        
        {
  
              resDetail: {
    id: "40377",
    resName: "Lucky Restaurant",
    cuisine: ["Biryani", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 36,
    costForTwo: "₹300 for two",
    imgId: "uvapcfajlsbctskdhuhl",
    location: "Santosh Nagar",
  },
        }
        
        */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        fontSize: "2rem",
        color: "white",
      }}
    >
      <h4>© 2024 Zayeem Mohd. All rights reserved.</h4>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
