import { useQuize } from "@hooks/quize-hook";
import React, { useEffect, useState } from "react";

const QuizzesTimer = () => {
  const [isExpired, setIsExpired] = useState(false);
  const { finishQuize, start_time: storedTimeInSeconds } = useQuize();
  const [time, setTime] = useState<number>(
    Math.max(0, storedTimeInSeconds - Math.floor(Date.now() / 1000))
  );

  useEffect(() => {
    storedTimeInSeconds && isExpired && finishQuize(); // when the timer expires quize will be automatically submit
  }, [isExpired]);

  useEffect(() => {
    if (time !== null) {
      const interval = setInterval(() => {
        if (time > 0) {
          setTime((prev) => prev && prev - 1);
        } else {
          clearInterval(interval);
          time !== null && setIsExpired(true);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [time]);

  return (
    <p className="text-mainColor text-xl font-medium">
      Timer: {time !== null
        ? `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
            Math.floor(time % 60)
          ).padStart(2, "0")}`
        : "00:00"}
    </p>
  );
};

export default QuizzesTimer;
