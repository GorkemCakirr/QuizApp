import {useState, useEffect} from "react";

const TIMER = 300

export default function Progress({selectedTopic}) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  
  
    const interval = setInterval(() => {
      console.log("setInterval");
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);
    return () => {
      console.log("clear")
      clearInterval(interval);
    };
  

  return <progress value={remainingTime} max={TIMER} />;
}
