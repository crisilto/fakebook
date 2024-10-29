import { useState } from "react";
import PronounSelect from "./PronounSelect";

interface GenderSelectProps {
  onSelect: (selection: { gender: string; pronoun: string | null }) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ onSelect }) => {
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [showPronounSelect, setShowPronounSelect] = useState<boolean>(false);
  const [selectedPronoun, setSelectedPronoun] = useState<string>("");
  const [customGender, setCustomGender] = useState<string>("");

  const updateParent = (gender: string, pronoun: string | null) => {
    onSelect({
      gender: gender,
      pronoun: pronoun,
    });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const genderValue = e.target.value;
    setSelectedGender(genderValue);
    setShowPronounSelect(genderValue === "custom");

    if (genderValue !== "custom") {
      setSelectedPronoun("");
      setCustomGender("");
      updateParent(genderValue, null);
    } else if (selectedPronoun) {
      updateParent(customGender || "custom", selectedPronoun);
    }
  };

  const handlePronounChange = (newPronoun: string) => {
    setSelectedPronoun(newPronoun);
    updateParent(customGender || "custom", newPronoun);
  };

  const handleCustomGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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