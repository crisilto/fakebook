import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  calculateAge,
  getDays,
  getMonths,
  getYears,
} from "../../../utils/dateUtils";

const BirthdaySelect = ({ onSelect }) => {
  
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedYear, setSelectedYear] = useState("2014");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    validateAndUpdateBirthday(selectedMonth, selectedDay, selectedYear, false);
  });

  const validateAndUpdateBirthday = (month, day, year, showError = true) => {
    if (month && day && year) {
      const formattedMonth = String(month).padStart(2, "0");
      const formattedDay = String(day).padStart(2, "0");
      const dateString = `${year}-${formattedMonth}-${formattedDay}`;

      const age = calculateAge(dateString);

      if (age >= 10 && age <= 100) {
        setErrorMessage("");
        onSelect(dateString);
      } else {
        if (showError && hasInteracted) {
          setErrorMessage(
            "You must be between 10 and 100 years old to register."
          );
        }
        onSelect(showError ? "" : dateString); 
      }
    }
  };

  const handleMonthChange = (e) => {
    setHasInteracted(true);
    const newMonth = e.target.value;
    setSelectedMonth(newMonth);
    validateAndUpdateBirthday(newMonth, selectedDay, selectedYear);
  };

  const handleDayChange = (e) => {
    setHasInteracted(true);
    const newDay = e.target.value;
    setSelectedDay(newDay);
    validateAndUpdateBirthday(selectedMonth, newDay, selectedYear);
  };

  const handleYearChange = (e) => {
    setHasInteracted(true);
    const newYear = e.target.value;
    setSelectedYear(newYear);
    validateAndUpdateBirthday(selectedMonth, selectedDay, newYear);
  };

  return (
    <div className="form-group">
      <label>Birthday:</label>
      <div className="birthday-select">
        <select value={selectedMonth} onChange={handleMonthChange}>
          {getMonths().map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        <select value={selectedDay} onChange={handleDayChange}>
          {getDays(selectedMonth).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select value={selectedYear} onChange={handleYearChange}>
          {getYears().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default BirthdaySelect;

BirthdaySelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};