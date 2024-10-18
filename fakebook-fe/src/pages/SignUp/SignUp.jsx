import BirthdaySelect from "./BirthdaySelect/BirthdaySelect";
import GenderSelect from "./GenderSelect/GenderSelect";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-title">
        <h1>fakebook</h1>
      </div>
      <div className="sign-up-form">
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

export default SignUp;
