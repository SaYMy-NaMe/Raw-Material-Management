import { Toaster } from "react-hot-toast";
import Landing from "./pages/landing-page/Landing";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ForgotPassword from "./pages/forgot-pass/ForgotPassword";
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./utils/ProtectedRoute";
import { protectedRoutes } from "./routes/routes";

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {protectedRoutes.map((protectedRoute) => (
          <Route
            key={protectedRoute.path}
            path={protectedRoute.path}
            element={
              <ProtectedRoute>{<protectedRoute.element />}</ProtectedRoute>
            }
          />
        ))}
      </Routes>

      <Toaster />
    </AuthProvider>
  );
};

export default App;
