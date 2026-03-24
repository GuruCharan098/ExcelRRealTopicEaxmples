import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return <h3>{time} sec</h3>;
}