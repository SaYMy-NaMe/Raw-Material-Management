import InputField from "../../components/InputField";
import "./changePassword.css";
const ChangePassword = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const changePasswordData = {
      oldPassword: e.target.oldPassword.value,
      newPassword: e.target.newPassword.value,
    };
    console.log(changePasswordData);
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
