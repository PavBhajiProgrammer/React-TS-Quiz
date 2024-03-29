import './App.css'
import { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { fetchQuezeQuestions } from './components/API';

const   TOTAL_QUESTIONS = 10;

function App() {

  const[loading, setLoading] = useState(false);
  const[questions, setQuestions] = useState([]);
  const[number, setNumber] = useState(0);
  const[userAnswer, setUserAnswer] = useState([]);
  const[score, setScore] = useState(0);
  const[gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className='app'>
        <h1>Quiz App</h1>

        <button className='start' onClick={startTrivia}>Start</button>


        <p className='score'>Score:</p>

        <p>Loading Questions...</p>

        <QuestionCard
         questionNumber={number + 1}
         totalQuestions={TOTAL_QUESTIONS} 
         question={questions[number].question}
         answers={questions[number].answers}
         userAnswer={userAnswer ? userAnswer[number] : undefined}
         callback={checkAnswer}
         />

        <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default App
