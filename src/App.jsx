import {useState, useRef, useEffect} from "react";
import image from "./assets/quiz-logo.png";
import Question from "./components/Question";
import Answer from "./components/Answer";
import {answers} from "./data";
import Progress from "./components/Progress";


const questions = {
  question_1: "How do you typicallyu render list content in React apps?",
  question_2: "Which approach can NOT be used to render context conditionally?",
};

function App() {
  const [questionNum, setQuestionNum] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
console.log(selectedTopic)


  function handleSelected(currentValue) {
       if (currentValue === 1) {
      setSelectedTopic(1);
      setIsCorrect(true);
    }
    if (currentValue === 2) {
      setSelectedTopic(2);
      setIsCorrect(false);
    }
    if (currentValue === 3) {
      setSelectedTopic(3);
      setIsCorrect(false);
    }
    if (currentValue === 4) {
      setSelectedTopic(4);
      setIsCorrect(false);
    }}
    
  const questionAnswers = answers.filter((answer) => {
    if (answer.id[0] === questionNum) {
      return answer;
    }
  });

 

 
  return (
    <>
      <header>
        <img src={image} alt="" />
        <h1>REACTQUIZ</h1>
        {selectedTopic !== null && <Progress selectedTopic={selectedTopic}/>}
      </header>

      <div id="quiz">
        <Question question={questions[questionNum]} />
        <div id="answers">
          <Answer
            isCorrect={true}
            isSelected={selectedTopic === 1}
            onClick={() => {
              handleSelected(1);
            }}
            answer={questionAnswers[0]}
          />
          <Answer
            isCorrect={false}
            isSelected={selectedTopic === 2}
            onClick={() => {
              handleSelected(2);
            }}
            answer={questionAnswers[1]}
          />
          <Answer
            isCorrect={false}
            isSelected={selectedTopic === 3}
            onClick={() => {
              handleSelected(3);
            }}
            answer={questionAnswers[2]}
          />
          <Answer
            isCorrect={false}
            isSelected={selectedTopic === 4}
            onClick={() => {
              handleSelected(4);
            }}
            answer={questionAnswers[3]}
          />
        </div>
      </div>
    </>
  );
}






    // useEffect(() => {
    //   setTimeout(() => {
    //     if (isCorrect === true) {
    //       setSelectedTopic("correct");
    //     } else {
    //       setSelectedOne("wrong");
    //     }
    //   }, 3000);
    // },);

    


export default App;
