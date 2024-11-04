import { useEffect, useState } from "react";
import {
  getCurrentDate,
  getDays,
  getMonths,
  getYears,
  isValidAge
} from "../../../utils/dateUtils";
import { ERROR_MESSAGES } from "../../../utils/errorMessages";

interface BirthdaySelectProps {
  onSelect: (date: string) => void;
}

const BirthdaySelect: React.FC<BirthdaySelectProps> = ({ onSelect }) => {
  const { currentDay, currentMonth, currentYear } = getCurrentDate();

  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<string>(currentDay);
  const [selectedYear, setSelectedYear] = useState<string>(currentYear);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    validateAndUpdateBirthday(selectedMonth, selectedDay, selectedYear, false);
  }, [selectedMonth, selectedDay, selectedYear]);

  const validateAndUpdateBirthday = (
    month: string,
    day: string,
    year: string,
    showError: boolean = true
  ) => {
    if (month && day && year) {
      const formattedMonth = String(month).padStart(2, "0");
      const formattedDay = String(day).padStart(2, "0");
      const dateString = `${year}-${formattedMonth}-${formattedDay}`;

      if (isValidAge(dateString)) {
        setErrorMessage("");
        onSelect(dateString);
      } else {
        setErrorMessage(showError ? ERROR_MESSAGES.AGE_VALIDATION : "");
        onSelect("");
      }
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = e.target.value;
    setSelectedMonth(newMonth);
    validateAndUpdateBirthday(newMonth, selectedDay, selectedYear);
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDay = e.target.value;
    setSelectedDay(newDay);
    validateAndUpdateBirthday(selectedMonth, newDay, selectedYear);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
          {getDays(Number(selectedMonth)).map((day) => (
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