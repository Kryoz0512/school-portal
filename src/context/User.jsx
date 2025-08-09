import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function User({ children }) {
 const [role, setRole] = useState("");
 const [user, setUser] = useState("");

 const values = {
  role,
  user,
  setUser,
  setRole,
 };
 return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export function useUser() {
 const context = useContext(UserContext);
 if (!context) {
  throw new Error("useAuth must be used within an UserProvider");
 }
 return context;
}
