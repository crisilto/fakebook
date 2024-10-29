import PropTypes from "prop-types";
import { useState } from "react";
import PronounSelect from "./PronounSelect";

const GenderSelect = ({ onSelect }) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [showPronounSelect, setShowPronounSelect] = useState(false);
  const [selectedPronoun, setSelectedPronoun] = useState("");
  const [customGender, setCustomGender] = useState("");

  const updateParent = (gender, pronoun) => {
    onSelect({
      gender: gender,
      pronoun: pronoun,
    });
  };

  const handleGenderChange = (e) => {
    const genderValue = e.target.value;
    setSelectedGender(genderValue);
    setShowPronounSelect(genderValue === "custom");

    if (genderValue !== "custom") {
      setSelectedPronoun("");
      setCustomGender("");
      updateParent(genderValue, null);
    } else if(selectedPronoun) {
      updateParent(customGender || "custom", selectedPronoun);
    }
  };

  const handlePronounChange = (newPronoun) => {
    setSelectedPronoun(newPronoun);
    updateParent(customGender || "custom", newPronoun);
  };

  const handleCustomGenderChange = (e) => {
    const value = e.target.value;
    setCustomGender(value);
    updateParent(value || "custom", selectedPronoun);
  };

  return (
    <div className="form-group">
      <label>Gender</label>
      <div className="gender-select">
        <label className="gender-option">
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={handleGenderChange}
          />
        </label>

        <label className="gender-option">
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === "male"}
            onChange={handleGenderChange}
          />
        </label>

        <label className="gender-option">
          Custom
          <input
            type="radio"
            name="gender"
            value="custom"
            checked={selectedGender === "custom"}
            onChange={handleGenderChange}
          />
        </label>
      </div>

      {showPronounSelect && (
        <>
          <PronounSelect
            selectedPronoun={selectedPronoun}
            setSelectedPronoun={handlePronounChange}
          />
          <input
            type="text"
            placeholder="Gender (optional)"
            value={customGender}
            onChange={handleCustomGenderChange}
            className="custom-gender-input"
          />
        </>
      )}
    </div>
  );
};

export default GenderSelect;

GenderSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};