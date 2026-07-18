import { Outlet } from "react-router";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import HotelListContext from "./utils/HotelListContext";

const AppLayout = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();


  const [allItems, setAllItems] = useState(null); // master copy
  const [hotelList, setHotelList] = useState(null); // UI copy

  //authentication
  useEffect(() => {
    const randomTrue = Math.random() < 0.3;

    if (!randomTrue) {
      setUsername("guest");
      setEmail("guestEmail.com");
      return;
    }

    // data from backend if authentication call success
    const loggedInUser = {
      email: "zayeemuddin123@gmail.com",
      name: "ZAYEEM",
    };

    setUsername(loggedInUser.name);
    setEmail(loggedInUser.email);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ name: username, email: email }}>
        <HotelListContext.Provider value={{hotelList, setHotelList, setAllItems, allItems}}>
          <Header />
          <Outlet />
          <Footer />
        </HotelListContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default AppLayout;
