import { useState } from "react";
import PronounSelect from "./PronounSelect";

const GenderSelect = () => {
  const [gender, setGender] = useState("");
  const [showPronounSelect, setShowPronounSelect] = useState(false);
  const [selectedPronoun, setSelectedPronoun] = useState("");
  const [customPronoun, setCustomPronoun] = useState("");

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);

    if (selectedGender === "custom") {
      setShowPronounSelect(true);
    } else {
      setShowPronounSelect(false);
      setSelectedPronoun("");
      setCustomPronoun("");
    }
  };

  return (
    <div className="form-group">
      <label>Gender</label>
      <div className="gender-select">
        <label className="gender-option">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          Female
        </label>

        <label className="gender-option">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          Male
        </label>

        <label className="gender-option">
          <input
            type="radio"
            name="gender"
            value="custom"
            checked={gender === "custom"}
            onChange={handleGenderChange}
          />
          Custom
        </label>
      </div>

      {showPronounSelect && (
        <>
          <PronounSelect
            selectedPronoun={selectedPronoun}
            setSelectedPronoun={setSelectedPronoun}
          />
          <input
            type="text"
            placeholder="Gender (optional)"
            value={customPronoun}
            onChange={(e) => setCustomPronoun(e.target.value)}
          />
        </>
      )}
    </div>
  );
};

export default GenderSelect;
