import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getDays, getMonths, getYears } from "../../../utils/dateUtils";

const BirthdaySelect = ({ onSelect }) => {
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  useEffect(() => {
    updateBirthday(selectedMonth, selectedDay, selectedYear);
  });

  const updateBirthday = (month, day, year) => {
    if (month && day && year) {
      const formattedMonth = String(month).padStart(2, "0");
      const formattedDay = String(day).padStart(2, "0");
      const dateString = `${year}-${formattedMonth}-${formattedDay}`;

      const birthDate = new Date(dateString);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      const adjustedAge =
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
          ? age - 1
          : age;

      if (adjustedAge >= 10 && adjustedAge <= 100) {
        onSelect(dateString);
      } else {
        onSelect(""); 
      }
    }
  };

  const handleMonthChange = (e) => {
    const newMonth = e.target.value;
    setSelectedMonth(newMonth);
    updateBirthday(newMonth, selectedDay, selectedYear);
  };

  const handleDayChange = (e) => {
    const newDay = e.target.value;
    setSelectedDay(newDay);
    updateBirthday(selectedMonth, newDay, selectedYear);
  };

  const handleYearChange = (e) => {
    const newYear = e.target.value;
    setSelectedYear(newYear);
    updateBirthday(selectedMonth, selectedDay, newYear);
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
    </div>
  );
};

export default BirthdaySelect;

BirthdaySelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};