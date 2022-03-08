import Loading from "./Loading.js"
import SetupQuiz from "./SetupQuiz"
import Modal from "./Modal"
import Question from "./Question"
function App() {
  return (
    <div className="main">
      <Loading />
      <SetupQuiz />
      <Modal />
      <Question />
    </div>
  )
}

export default App;
