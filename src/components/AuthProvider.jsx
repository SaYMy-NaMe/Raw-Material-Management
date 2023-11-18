/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getStoredData } from "../utils/localStorage";
import AuthContext from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) {
      const accessToken = getStoredData("token");
      const userData = getStoredData("user");
      setUser({
        token: accessToken,
        ex_name: userData?.ex_name,
        ex_email: userData?.ex_email,
        role_name: userData?.role_name,
        ex_contactNO: userData?.ex_contactNO,
      });
    }
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
