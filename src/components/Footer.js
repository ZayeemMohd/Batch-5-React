import useOnlineStatus from "../utils/useOnlineStatus";


const Footer = () => {
 const isOnline =  useOnlineStatus();
  return (
    <div
      className="footer"
      style={{
        fontSize: "2rem",
        color: "white",
      }}
    >
      <h4>© 2024 Zayeem Mohd. All rights reserved.</h4>
      {isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
};


export default Footer;