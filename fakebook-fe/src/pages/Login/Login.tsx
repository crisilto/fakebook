import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../components/Footer/Footer.scss";
import Footer from "./../../components/Footer/Footer";
import "./Login.scss";

const Login: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Logging in...");

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactInfo, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.jwt);
        console.log("Login successful", data);
        navigate("/home");
      } else {
        setError("Invalid email or password");
        console.error("Login failed", response);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Error during login:", err);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-container-content">
            <div className="login-header">
              <h1>fakebook</h1>
              <p>Connect with friends and the world around you on Facebook.</p>
            </div>
            <div className="login-right">
              <div className="login-box">
                <form className="login-form" onSubmit={handleLogin}>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email or phone number"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="submit" className="btn-login">
                    Log In
                  </button>
                  {error && <p className="error-message">{error}</p>}
                  <a href="#">Forgot password?</a>
                  <button
                    type="button"
                    className="btn-create-account"
                    onClick={() => navigate("/register")}
                  >
                    Create new account
                  </button>
                </form>
              </div>
              <div className="login-footer">
                <p>
                  <a href="#">Create a Page</a> for a celebrity, brand or business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer className="footer-login" />
      </div>
    </>
  );
};

export default Login;