import PropTypes from "prop-types";
import { useState } from "react";
import { getDays, getMonths, getYears } from "../../../utils/dateUtils";

const BirthdaySelect = ({onSelect}) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const updateBirthday = (month, day, year) => {
    if (month && day && year) {
      const formattedMonth = String(month).padStart(2, '0');
      const formattedDay = String(day).padStart(2, '0');
      const dateString = `${year}-${formattedMonth}-${formattedDay}`;
      onSelect(dateString);
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
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {getMonths().map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select
          value={selectedDay}
          onChange={handleDayChange}
        >
          {getDays(selectedMonth).map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={handleYearChange}
        >
          {getYears().map((year, index) => (
            <option key={index} value={year}>
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