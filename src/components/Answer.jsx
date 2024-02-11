import {useEffect, useState} from "react";
import {answers} from "../data";

export default function Answer({isCorrect, isSelected, answer, onClick}) {
  const [selectedStyle, setSelectedStyle] = useState("");
  // const selectedStyle = useRef("");

  useEffect(() => {
    if (isSelected === true) {
      setSelectedStyle("selected");

      setTimeout(() => {
        if (isCorrect) {
          setSelectedStyle("correct");
        }else{
          setSelectedStyle("wrong")
        }
          
        
      }, 3000);
    }
  }, [isSelected]);

  return (
    <>
      <div className="answer">
        <button className={selectedStyle} onClick={onClick}>
          {answer.content}
        </button>
      </div>
    </>
  );
}
