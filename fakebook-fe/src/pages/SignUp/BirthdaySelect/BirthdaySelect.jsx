import { useState } from "react";
import { getDays, getMonths, getYears } from "../../utils/dateUtils";

const BirthdaySelect = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div className="form-birthday-group">
      <label>Birthday:</label>
      <div className="birthday-select">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {getMonths().map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {getDays(selectedMonth).map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
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
