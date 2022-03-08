import React from "react"
import { useGlobalContext } from "./context"
const SetupQuiz = () => {
  const { quiz, handleChange, handleSubmit, isChoosing } = useGlobalContext()
  return (
    isChoosing && (
      <form className="quiz-setup" onSubmit={handleSubmit}>
        <h1>SetupQuiz</h1>
        <label htmlFor="number">How many questions?</label>
        <input
          type="number"
          id="number"
          name="number"
          value={quiz.amount}
          onChange={handleChange}
          max="50"
          min="1"
        />
        <label htmlFor="category">Category?</label>
        <select
          id="category"
          name="category"
          value={quiz.category}
          onChange={handleChange}
        >
          <option value="sports">sports</option>
          <option value="history">history</option>
          <option value="politics">politics</option>
        </select>
        <label htmlFor="difficulty">Difficulty?</label>
        <select
          id="difficulty"
          name="difficulty"
          value={quiz.difficulty}
          onChange={handleChange}
        >
          <option value="easy">easy</option>
          <option value="normal">normal</option>
          <option value="hard">hard</option>
        </select>

        <button className="submit-button" onSubmit={handleSubmit}>Start</button>
      </form>
    )
  )
}

// SetupQuiz.propTypes = {}

export default SetupQuiz
