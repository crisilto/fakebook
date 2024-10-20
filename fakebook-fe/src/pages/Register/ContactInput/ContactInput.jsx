import { useState } from "react";

const ContactInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{7,15}$/;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (emailRegex.test(value) || phoneRegex.test(value)) {
      setError("");
    } else {
      setError("Please enter a valid email or phone number");
    }
  };
  return (
    <div className="form-group">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={`input-field ${error ? "error" : ""}`}
        placeholder="Mobile number or email"
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default ContactInput;