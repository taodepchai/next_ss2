"use client";
import React, { useState } from "react";
import moment from "moment";
import styles from "./Bt12.module.css"; // Adjust the import path as necessary

const Bt12: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = currentDate.startOf("month").day();

  const previousMonth = () =>
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.clone().add(1, "month"));
  const setDateToToday = () => setCurrentDate(moment());

  const selectDate = (date: moment.Moment) => {
    setSelectedDate(date.format("DD/MM/YYYY"));
  };

  const generateDays = () => {
    const days: JSX.Element[] = [];
    // Adding days of the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`prev-${i}`} className={`${styles.day} ${styles.disabled}`}>
          {moment(currentDate)
            .subtract(1, "month")
            .endOf("month")
            .subtract(firstDayOfMonth - 1 - i, "days")
            .date()}
        </div>
      );
    }
    // Adding days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const day = moment(currentDate).date(i);
      days.push(
        <div
          key={`curr-${i}`}
          className={`${styles.day} ${
            day.isSame(moment(), "day") ? styles.active : ""
          }`}
          onClick={() => selectDate(day)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className={styles.dateComponent}>
      <div className={styles.header}>
        <button onClick={previousMonth}>&lt;</button>
        <span>{currentDate.format("MMMM YYYY")}</span>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className={styles.daysContainer}>{generateDays()}</div>
      <div className={styles.buttonContainer}>
        <button onClick={setDateToToday}>Set date</button>
      </div>
      {selectedDate && <div>Selected Date: {selectedDate}</div>}
    </div>
  );
};

export default Bt12;
