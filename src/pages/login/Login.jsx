import toast from "react-hot-toast";
import InputField from "../../components/InputField";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      ex_email: e.target.ex_email.value,
      ex_password: e.target.ex_password.value,
    };
    // Make a POST request to the login API
    fetch("https://icsrmms.vercel.app/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "User Login Successfull") {
          toast.success("You've logged in successfully");
          navigate("/");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during Sign in. Please try again.");
      });
  };
  return (
    <div id="login">
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

        <p>
          Don&apos;t have any account?{" "}
          <NavLink to="/signup" className="linkText">
            Sign Up
          </NavLink>{" "}
        </p>
        <button className="authButton" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};
export default Login;
