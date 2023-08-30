import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import { questions } from './questions';


function App() {
 

  let [showfinal, setShowfinal] = useState(false);
  let [currentscore, setCurrentscore] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(0)
 
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setCurrentscore(currentscore + 1);

    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowfinal(true)
    }

  }

  const restart = () => {
    setCurrentQuestion(0);
    setCurrentscore(0);
    setShowfinal(false)
  }

  return (
    <div className="App">

      <h1 style={{ marginTop: "20px", fontWeight: "bolder" }}>USA Quiz</h1>

      <h3 style={{ marginBottom: "40px" }}>Current Score : {currentscore}</h3>
      {
        showfinal ? <div className="result">
          <h1>Result</h1>
          <h3 style={{ margin: "10px" }}>{currentscore} out of {questions.length} are  Correct - (&nbsp;{(currentscore / questions.length) * 100}%&nbsp;)</h3>
          <button className="btn btn-danger" onClick={restart} >Restart</button>
        </div> :
          <div className="question-card">
            <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
            <h3 className="question-text">{questions[currentQuestion].text} </h3>
            <ul>
              {
                questions[currentQuestion].options.map((ele) => {
                  return (
                    <li onClick={() => { optionClicked(ele.isCorrect) }} key={ele.id} >{ele.text}</li>
                  )
                })
              }
            </ul>

          </div>
      }



    </div>
  );
}

export default App;
