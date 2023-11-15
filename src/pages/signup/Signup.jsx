import toast from "react-hot-toast";
import InputField from "../../components/InputField";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import Spinner from "../../components/spinner/Spinner";

const Signup = () => {
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const signupData = {
      ex_name: e.target.ex_name.value,
      ex_email: e.target.ex_email.value,
      ex_contactNO: e.target.ex_contactNO.value,
      ex_password: e.target.ex_password.value,
    };

    // Make a POST request to the signup API
    fetch(`${baseUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Successfully Registered With Us") {
          setLoading(false);
          toast.success("A mail has been sent");
          navigate("/signin");
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        alert("An error occurred during signup. Please try again.");
      });
  };

  return (
    <div id="signup">
      {isLoading && <Spinner />}
      <h1>Sign up</h1>
      <p>Enter details to create your account!</p>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="ex_name"
          fieldName="Name"
          placeholder="Enter your Name"
        />
        <InputField
          type="email"
          name="ex_email"
          fieldName="Email"
          placeholder="Enter your email"
        />
        <InputField
          type="number"
          name="ex_contactNO"
          fieldName="Contact No"
          placeholder="Enter your contact No"
        />
        <InputField
          type="password"
          name="ex_password"
          fieldName="Password"
          placeholder="Enter password"
        />

        <p>
          Already have an account?{" "}
          <NavLink to="/signin" className="linkText">
            Login
          </NavLink>
        </p>
        <button className="authButton" type="submit" disabled={isLoading}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
