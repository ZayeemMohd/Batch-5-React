import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
  const data = useContext(UserContext);
  const isOnline = useOnlineStatus();
  return (
    <div
      className="footer"
      style={{
        fontSize: "2rem",
        color: "white",
      }}
    >
      <h4>© 2024 {data.name}. All rights reserved.</h4>
      {isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
};

export default Footer;
