import axios from "axios"

import React, { useState, useContext } from "react"

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const [isChoosing, setIsChoosing] = useState(true)

  const [endGame, setIsEndGame] = useState(false)

  const [questions, setQuestions] = useState([])
  const [quiz, setQuiz] = useState({
    number: 0,
    category: "sports",
    difficulty: "easy",
  })
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [questionNo, setQuestionNo] = useState(1)
  const [answers, setAnswers] = useState([])

  const answerScrambler = (correct, incorrect) => {
    const scrambledAnswers = [...incorrect]
    const randomNumber = Math.floor(Math.random() * (3 + 1))
    //check this + 1?
    scrambledAnswers.splice(randomNumber, 0, correct)
    setAnswers(scrambledAnswers)
  }

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setQuiz({ ...quiz, [name]: value })
  }

  const url = `https://opentdb.com/api.php?amount=${quiz.number}&category=${
    table[quiz.category]
  }&difficulty=${quiz.difficulty}&type=multiple`

  const fetchQuestions = async () => {
    const res = await axios.get(url)
    const ques = await res.data
    setQuestions(ques.results)
    setCurrentQuestion(ques.results[0])
    setQuestionNo(1)
    answerScrambler(
      ques.results[0].correct_answer,
      ques.results[0].incorrect_answers
    )
    setIsLoading(false)
  }

  const handleSubmit = (e) => {
    if (quiz.number > 0) {
      e.preventDefault()
      setIsChoosing(false)
      setIsLoading(true)
      fetchQuestions()
    } else alert("please select a number of questions")
  }
  const answerQuestion = (e) => {
    if (e.target.innerHTML === currentQuestion.correct_answer) {
      setScore(score + 1)
      nextQuestion()
    } else nextQuestion()
  }

  const nextQuestion = () => {
    if (questions.length === questionNo) {
      setIsEndGame(true)
    } else {
      setQuestionNo(questionNo + 1)
      setCurrentQuestion(questions[questionNo])
      answerScrambler(
        questions[questionNo].correct_answer,
        questions[questionNo].incorrect_answers
      )
      console.log(questionNo, currentQuestion)
    }
  }
  // useEffect(() => {
  //   console.log(score)
  //   console.log(questionNo)
  // }, [currentQuestion])

  const playAgain = () => {
    setScore(0)
    setQuestionNo(1)
    setIsEndGame(false)
    setIsChoosing(true)
  }
  return (
    <AppContext.Provider
      value={{
        quiz,
        handleChange,
        isLoading,
        handleSubmit,
        isChoosing,
        endGame,
        nextQuestion,
        questionNo,
        currentQuestion,
        answers,
        answerQuestion,
        score,
        questions,
        playAgain,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
