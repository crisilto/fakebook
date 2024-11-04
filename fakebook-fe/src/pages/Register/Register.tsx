import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { isValidAge } from "../../utils/dateUtils";
import { ERROR_MESSAGES } from "../../utils/errorMessages";
import BirthdaySelect from "./BirthdaySelect/BirthdaySelect";
import ContactInput from "./ContactInput/ContactInput";
import GenderSelect from "./GenderSelect/GenderSelect";
import "./Register.scss";

interface NewUser {
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  pronoun: string | null;
  contactInfo: string;
  password: string;
}

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [pronoun, setPronoun] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
  
    if (!isValidAge(birthday)) {
      setErrorMessage(ERROR_MESSAGES.AGE_VALIDATION);
      return;
    }
  
    if (
      !firstName ||
      !lastName ||
      !birthday ||
      !gender ||
      !contactInfo ||
      !password
    ) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    if (gender !== "male" && gender !== "female" && !pronoun) {
      setErrorMessage("Please select your pronoun");
      return;
    }

    const newUser: NewUser = {
      firstName,
      lastName,
      birthday,
      gender,
      pronoun: gender !== "male" && gender !== "female" ? pronoun : null,
      contactInfo,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newUser),
      });

      const textResponse = await response.text();
      console.log("Server response:", textResponse);

      if (response.ok) {
        console.log("User registered successfully", newUser);
        navigate("/login");
      } else {
        console.error("Error Response:", textResponse);
        setErrorMessage(textResponse || "Error registering user");
      }
    } catch (err) {
      setErrorMessage("An error occurred. Please try again later");
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
              <BirthdaySelect onSelect={(date) => setBirthday(date)} />
              <GenderSelect
                onSelect={({ gender, pronoun }) => {
                  setGender(gender);
                  setPronoun(pronoun);
                }}
              />
              <ContactInput setContactInfo={setContactInfo} />
              <input
                type="password"
                placeholder="New password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {errorMessage && <p className="error-message">{errorMessage}</p>}

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
                <a onClick={() => navigate("/login")}>
                  Already have an account?
                </a>
              </div>
            </form>
          </div>
        </div>
        <Footer className="footer-register" />
      </div>
    </>
  );
};

export default Register;