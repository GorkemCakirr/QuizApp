import {useState, useCallback} from "react";

import QUESTİONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  let summary = <h1>This is the end of the quiz</h1>;

  let quizIsComplete = activeQuestionIndex === QUESTİONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        console.log("setting");
        if (selectedAnswer === QUESTİONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <>
      {quizIsComplete ? (
        summary
      ) : (
        <div id="quiz">
          <Question
          key={activeQuestionIndex}
            questionText={QUESTİONS[activeQuestionIndex].text}
            answers={QUESTİONS[activeQuestionIndex].answers}
            answerState={answerState}
            selectedAnswer={userAnswers[userAnswers.length - 1]}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
          />
        </div>
      )}
    </>
  );
}
