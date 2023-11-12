import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStoredData } from "./localStorage";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const checkUser = () => {
    const userData = getStoredData("user");

    if (!userData) {
      setIsLoggedIn(false);
      return navigate("/signin");
    }

    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUser();
  }, [isLoggedIn]);

  return <> {isLoggedIn ? children : null}</>;
};

export default ProtectedRoute;
