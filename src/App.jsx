import { Toaster } from "react-hot-toast";
import Landing from "./pages/landing-page/Landing";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ForgotPassword from "./pages/forgot-pass/ForgotPassword";
import ChangePassword from "./pages/change-password/ChangePassword";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
