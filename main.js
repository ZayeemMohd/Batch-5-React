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
        
      let props =  {
              resName: "Mehfil",
              rating: 5
        }
        
        */
  }

  const { resName, rating } = props;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/3/24/60cad3c2-5ba1-4697-955b-735d198ae7e8_491960.JPG"
        />
      </div>
      <h3 className="res-title">{resName}</h3>
      <h4>Biryani, North Indian, Mughlai</h4>
      <h4>⭐️ {rating} Stars</h4>
      <h4>30 mins | ₹400 for two</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard resName={"Mehfil"} rating={5} />

        {/* 
        
        {
              resName: "Mehfil",
              rating: 5
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
