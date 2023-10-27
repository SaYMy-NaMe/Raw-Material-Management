import toast from "react-hot-toast";
import InputField from "../../components/InputField";
import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = {
      ex_email: e.target.ex_email.value,
      ex_password: e.target.ex_password.value,
    };
    console.log(signupData);

    toast.success("You have logged in successfully");
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
          </NavLink>
        </p>
        <button className="authButton" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};
export default Login;
