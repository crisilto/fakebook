import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import BirthdaySelect from "./BirthdaySelect/BirthdaySelect";
import ContactInput from "./ContactInput/ContactInput";
import GenderSelect from "./GenderSelect/GenderSelect";
import "./Register.scss";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      birthday,
      gender,
      mobileOrEmail,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log("User registered successfull");
        navigate("/login");
      } else {
        console.error("Error registering user");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <div className="register-page">
        <div className="register-container">
          <div className="register-title">
            <h1>fakebook</h1>
          </div>
          <div className="register-form">
            <div className="pre-form">
              <h3>Create a new account</h3>
              <p>It is quick and easy.</p>
            </div>
            <form onSubmit={handleRegister}>
              <div className="complete-name">
                <input
                  type="text"
                  placeholder="First name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <BirthdaySelect onSelect={setBirthday} />
              <GenderSelect onSelect={setGender} />
              <ContactInput setMobileOrEmail={setMobileOrEmail} />
              <input
                type="password"
                placeholder="New password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="additional-info">
                <p>
                  People who use our service may have uploaded your contact
                  information to Facebook.
                  <a href="#">Learn more.</a>
                </p>
                <p>
                  By clicking Sign Up, you agree to our
                  <a href="#"> Terms</a>. Learn how we collect, use, and share
                  your data in our
                  <a href="#"> Privacy Policy</a> and how we use cookies and
                  similar technology in our
                  <a href="#"> Cookies Policy</a>. You may receive SMS
                  Notifications from us and can opt out any time.
                </p>
              </div>

              <div className="bottom-form">
                <button type="submit" className="btn-sign-up">
                  Sign Up
                </button>
                <a onClick={() => navigate("/login")}>Already have an account?</a>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
