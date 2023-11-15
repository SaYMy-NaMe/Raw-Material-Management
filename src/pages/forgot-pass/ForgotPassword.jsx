import { toast } from "react-hot-toast";
import InputField from "../../components/InputField";
import "./forgotPassword.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import Spinner from "../../components/spinner/Spinner";

const ForgotPassword = () => {
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const forgotPasswordData = {
      ex_email: e.target.ex_email.value,
    };
    // Make a POST request to the Forgot Password API
    fetch(`${baseUrl}/forgotPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forgotPasswordData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Password sent to your email") {
          setLoading(false);
          toast.success("Password has been sent to your mail");
          navigate("/signin");
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
    <div id="forgotPassword">
      {isLoading && <Spinner />}
      <h1>Forgot Password</h1>
      <p>Enter your email to retrieve your account</p>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="ex_email"
          fieldName="Email"
          placeholder="Enter your email"
        />
        <button className="authButton" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
