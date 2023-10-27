import "./login.css";
const Login = () => {
  return (
    <div id="login">
      <h1 className="auth-title">
        Unlock the full experience! Log in to your account to get started.
      </h1>
      <p id="auth-description">Let's jazz up this form!</p>
      <form className="login-form">
        <div className="email-input">
          <label htmlFor="email-label" id="email-label">
            Email: <br />
            <input
              type="email"
              id="login-email"
              placeholder="Enter your email"
            />
          </label>
          <br />
        </div>
        <div className="password-input">
          <label htmlFor="password-label" id="password-label">
            Password: <br />
            <input
              type="password"
              id="login-password"
              placeholder="Enter your password"
            />
          </label>
        </div>
        <br />
        <button type="submit" id="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
