import { useEffect, useState } from "react";

function formatDate(date) {
  const time = new Date();
  const hour = `0${time.getHours()}`.slice(-2);
  const minutes = `0${time.getMinutes()}`.slice(-2);
  const seconds = `0${time.getSeconds()}`.slice(-2);

  return `${hour} : ${minutes} : ${seconds}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const NewTimeString = formatDate(now);
      setTimeString(NewTimeString);
    }, 1000);
    return () => {
      console.log("clock clean up");
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString }
}

export default useClock;
