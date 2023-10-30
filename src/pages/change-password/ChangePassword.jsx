/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";
import InputField from "../../components/InputField";
import "./changePassword.css";
import { useNavigate } from "react-router-dom";

const ChangePassword = ({ userData }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const changePasswordData = {
      oldPassword: e.target.oldPassword.value,
      newPassword: e.target.newPassword.value,
    };
    // Make a POST request to the change Password API
    fetch("https://icsrmms.vercel.app/changePassword", {
      method: "POST",
      headers: {
        Authorization: `${userData?.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changePasswordData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "password Updated successfully") {
          toast.success("Your password has been updated!");
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
    <div id="changePassword">
      <h1>Change your password!</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField
          type="password"
          name="oldPassword"
          fieldName="Old Password"
          placeholder="Enter your old password"
        />
        <InputField
          type="password"
          name="newPassword"
          fieldName="New Password"
          placeholder="Enter your new password"
        />
        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
