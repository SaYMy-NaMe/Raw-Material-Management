/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import InputField from "../../components/InputField";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { setStoredData } from "../../utils/localStorage";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import { AuthContext } from "../../contexts/authContext";
import Spinner from "../../components/spinner/Spinner";

const Login = () => {
  const { setUser } = useContext(AuthContext);

  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginData = {
      ex_email: e.target.ex_email.value,
      ex_password: e.target.ex_password.value,
    };

    // Make a POST request to the login API
    fetch(`${baseUrl}/auth/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "User Login Successful") {
          setLoading(false);
          toast.success("You've logged in successfully");

          if (data.token) {
            setStoredData("token", data.token);
            fetch(`${baseUrl}/seeProfile`, {
              method: "GET",
              headers: {
                Authorization: `${data.token}`,
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((userData) => {
                if (userData) {
                  setStoredData("user", {
                    ex_name: userData.ex_name,
                    ex_email: userData.ex_email,
                    role_name: userData.role_name,
                  });

                  setUser({
                    token: data.token,
                    ex_name: userData.ex_name,
                    ex_email: userData.ex_email,
                    role_name: userData.role_name,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);

                alert(
                  "An error occurred during get profile. Please try again."
                );
              });
          }
          navigate("/");
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);

        alert("An error occurred during Sign in. Please try again.");
      });
  };

  return (
    <div id="login">
      {isLoading && <Spinner />}
      <h1>Please Login Here...</h1>

      <form action="submit" onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="ex_email"
          fieldName="Email"
          placeholder="Enter your email"
        />

        <InputField
          type="password"
          name="ex_password"
          fieldName="Password"
          placeholder="Enter your password"
        />
        <NavLink to="/forgot-password" className="linkText">
          Forgot Password?
        </NavLink>
        <button className="authButton" type="submit" disabled={isLoading}>
          Sign In
        </button>
        <p>
          Don&apos;t have any account?{" "}
          <NavLink to="/signup" className="linkText">
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
};
export default Login;
