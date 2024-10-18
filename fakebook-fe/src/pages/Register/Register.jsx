import BirthdaySelect from "./BirthdaySelect/BirthdaySelect";
import GenderSelect from "./GenderSelect/GenderSelect";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-title">
        <h1>fakebook</h1>
      </div>
      <div className="register-form">
        <h3>Create a new account</h3>
        <p>It is quick and easy.</p>
        <form action="">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
          <BirthdaySelect />
          <GenderSelect />
          <input type="password" placeholder="New password" required />
          <button type="submit">Sign Up</button>
          <a href="#">Already have an account?</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
