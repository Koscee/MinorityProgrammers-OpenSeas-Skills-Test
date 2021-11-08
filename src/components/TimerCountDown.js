import React, { useState, useEffect } from "react";

export default function TimerCountDown({ endDate }) {
  const [timeRemaining, setTimeRemaining] = useState(
    new Date(endDate).getTime() - new Date().getTime()
  );
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  // countdown timer
  useEffect(() => {
    if (timeRemaining <= 0) return;
    const intervalId = setInterval(() => {
      setTimeRemaining(timeRemaining - 1000);

      setSecs(Math.floor((timeRemaining / 1000) % 60));
      setMins(Math.floor((timeRemaining / 1000 / 60) % 60));
      setHours(Math.floor((timeRemaining / 1000 / 60 / 60) % 24));
      setDays(Math.floor(timeRemaining / 1000 / 60 / 60 / 24));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  return (
    <>
      {timeRemaining <= 0
        ? "N/A"
        : `${days}d : ${hours}h : ${mins}m : ${secs}s`}
    </>
  );
}
