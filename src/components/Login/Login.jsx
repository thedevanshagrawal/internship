import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Login() {
  const [action, setAction] = useState("Login");
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle login
  const handleLogin = () => {
    // Perform login actions (e.g., validation, API call)
    // Assuming successful login, navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <section className="loginSection">
      <img src="/codeimage.svg" alt="" />
      <div className="registrationContainer">
        <div className="loginheader">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <input type="email" placeholder="Email id" />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgotPassword">
            Forgot password? <span>click here</span>
          </div>
        )}

        <div className="submitContainer">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={handleLogin} // Call handleLogin function on click
          >
            Login
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
