import { useState, useEffect } from "react";

function getDate() {
  const today = new Date();
  return {
    day: today.getDay().toString(),
    weekday: today.toLocaleDateString("en-EN", {
      weekday: "long",
    }),
    month: today.toLocaleDateString("en-EN", {
      month: "long",
    }),
    year: today.toLocaleDateString("en-EN", {
      year: "numeric",
    }),
  };
}

const { day, weekday, month, year } = getDate();

export default function useDate() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const dateInterval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
      return () => {
        clearInterval(dateInterval);
      };
    }, 1000);
  }, []);

  return {
    day,
    weekday,
    month,
    year,
    time,
  };
}
