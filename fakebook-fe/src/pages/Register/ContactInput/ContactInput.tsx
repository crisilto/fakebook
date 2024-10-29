import { useState } from "react";

interface ContactInputProps {
  setContactInfo: (value: string) => void;
}

const ContactInput: React.FC<ContactInputProps> = ({ setContactInfo }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{7,15}$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (emailRegex.test(value) || phoneRegex.test(value)) {
      setError("");
      setContactInfo(value);
    } else {
      setError("Please enter a valid email or phone number");
      setContactInfo("");
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