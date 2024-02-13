import {useState, useCallback} from "react";

import QUESTİONS from "../questions";
import Summary from "./Summary";
import Question from "./Question";

export default function Quiz() {
  // const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  let quizIsComplete = activeQuestionIndex === QUESTİONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <>
      {quizIsComplete ? (
        <Summary userAnswers={userAnswers}/>
      ) : (
        <div id="quiz">
          <Question
            userAnswers={userAnswers}
            key={activeQuestionIndex}
            questionIndex={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
          />
        </div>
      )}
    </>
  );
}
