import { Toaster } from "react-hot-toast";
import Landing from "./pages/landing-page/Landing";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ForgotPassword from "./pages/forgot-pass/ForgotPassword";
import ChangePassword from "./pages/change-password/ChangePassword";
import { useEffect, useState } from "react";
import { getStoredData, setStoredData } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (user) {
      console.log(user);
      setStoredData("token", user.token);
      setStoredData("user", {
        ex_name: user.ex_name,
        ex_email: user.ex_email,
        role_name: user.role_name,
      });
    } else {
      const accessToken = getStoredData("token");
      const userData = getStoredData("user");
      console.log(user);
      setUser({
        token: accessToken,
        ex_name: userData?.ex_name,
        ex_email: userData?.ex_email,
        role_name: userData?.role_name,
      });
    }
  }, [user]);

  return (
    <>
      <Header userData={user} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login setUser={setUser} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
