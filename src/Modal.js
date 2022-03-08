import React from "react"
import ReactDOM from "react-dom"
import { useGlobalContext } from "./context"

const Modal = () => {
  const { endGame, playAgain, score, questions } = useGlobalContext()
  return ReactDOM.createPortal(
    endGame && (
      <div className="modal-container">
        <div className="modal">
          <h1>Congrats!</h1>
          <h2>
            You got {Math.floor((score / questions.length) * 100)}% correct!
          </h2>
          <button className="submit-button" onClick={playAgain}>
            Play again
          </button>
        </div>
      </div>
    ),
    document.getElementById("modals")
  )
}

export default Modal
