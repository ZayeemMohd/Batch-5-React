import { createContext } from "react";

const UserContext = createContext({
  name: "default user",
  email: "default@example.com",
});

export default UserContext;
