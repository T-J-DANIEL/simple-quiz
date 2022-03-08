import React from "react"
import { useGlobalContext } from "./context"

const Question = () => {
  const {
    isChoosing,
    isLoading,
    nextQuestion,
    questions,
    currentQuestion,
    answers,
    answerQuestion,
    score,
  } = useGlobalContext()
  return (
    !isChoosing &&
    !isLoading && (
      <div className="question">
        <h3 className="question--align-right">
          Correct Answers: {`${score}`}/{`${questions.length}`}
        </h3>
        <h1>{`${currentQuestion.question}`}</h1>
        <button className="answer-button"onClick={answerQuestion}>{`${answers[0]}`}</button>
        <button className="answer-button"onClick={answerQuestion}>{`${answers[1]}`}</button>
        <button className="answer-button"onClick={answerQuestion}>{`${answers[2]}`}</button>
        <button className="answer-button"onClick={answerQuestion}>{`${answers[3]}`}</button>
        <button
          className="question--align-right submit-button"
          onClick={nextQuestion}
        >
          Next Question
        </button>
      </div>
    )
  )
}

export default Question
