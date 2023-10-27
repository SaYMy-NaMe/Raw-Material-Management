import "./signup.css";

const Signup = () => {
  return (
    <div id="signup">
      <h1 className="auth-title">Register Now!</h1>
      <p className="auth-description">Let's jazz up this form!</p>
      <form className="signup-form">
        <div className="name-input">
          <label htmlFor="name-label" id="name-label">
            Name: <br />
            <input type="text" id="signup-name" placeholder="Enter your Name" />
          </label>
          <br />
        </div>
        <div className="email-input">
          <label htmlFor="email-label" id="email-label">
            Email: <br />
            <input
              type="email"
              id="signup-email"
              placeholder="Enter your email"
            />
          </label>
          <br />
        </div>
        <div className="number-input">
          <label htmlFor="number-label" id="number-label">
            Contact: <br />
            <input
              type="number"
              id="signup-contact"
              placeholder="Enter your contact"
            />
          </label>
          <br />
        </div>
        <div className="password-input">
          <label htmlFor="password-label" id="password-label">
            Password: <br />
            <input
              type="password"
              id="signup-password"
              placeholder="Enter your password"
            />
          </label>
        </div>
        <br />
        <button type="submit" id="signup-submit">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default Signup;
