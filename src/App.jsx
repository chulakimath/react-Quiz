import { useCallback, useEffect, useState } from 'react'

import './App.css'
import data from './data2';

function App() {
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0)
  const [question, setQuestion] = useState({});

  const handler = (e) => {
    if (e.target.id == question["answer"]) {
      setScore(prev => prev + 5);
      setAttempted(prev => prev + 1)
    }
    else {
      setScore(prev => prev - 1);
      setAttempted(prev => prev + 1)
    }
  }
  const gameEnd = () => {
    let finalScore = score / attempted
    if (isNaN(finalScore)) {
      alert(`Just Try Game Once Before Ending`)
      return
    }
    window.alert(`Game Over Your Score is ${score} You Attempted ${attempted} Questions And Your Average is = ${finalScore}`);

    setScore(0);
    setAttempted(0);


  }

  const getQuestion = useCallback(() => {
    let randomNumber = Math.floor(Math.random() * data.length);
    setQuestion((prev) => data[randomNumber])
  }, [setQuestion])
  useEffect(getQuestion, [score])



  return (
    <>
      <div className='bg-slate-700 text-white h-screen w-screen transition-all duration-100' >
        <div className='flex flex-col place-items-center  h-screen'>
          <div>
            <div className='text-center sm:flex place-content-center gap-32 bg-red-400 w-screen py-5 text-lg '>
              <div>Score : {score}</div>
              <div>Attempted : {attempted}</div>
              <button className='border-2 border-red-900 text-white px-5 py-1  text-center rounded-lg cursor-help hover:bg-red-600 hover:border-yellow-500 transition-all duration-300 mt-2 sm:mt-0'
                onClick={gameEnd}>
                End Game</button>

            </div>
            <div className='text-center sm:place-content-center'>
              <div className='p-1 bg-yellow-300 text-slate-950 sm:p-2 sm:w-6/12 sm:inline-flex place-content-center'>Question: </div>
              <div className='p-1 sm:p-2 text-lg hover:text-2xl transition-all delay-200'>{question.question}</div>

            </div>
          </div>

          <div className='p-1 bg-yellow-300 text-slate-950 text-center w-screen m:p-2 sm:w-6/12 sm:inline-flex place-content-center'>Options:choose Corret Answer </div>

          <div>
            <div className='bg-slate-900 px-3 py-2 mt-4 rounded-lg shadow-yellow-300 shadow-md cursor-pointer' onClick={handler}>
              <div id='A' className='text-left'><span>{"A . "}  </span> {question['A']}</div>
            </div>
            <div className='bg-slate-900 px-3 py-2 mt-4 rounded-lg shadow-yellow-300 shadow-md cursor-pointer' onClick={handler}>
              <div id='B' className='text-left'><span>{"B . "}  </span> {question['B']}</div>

            </div>
            <div className='bg-slate-900 px-3 py-2 mt-4 rounded-lg shadow-yellow-300 shadow-md cursor-pointer' onClick={handler}>
              <div id='C' className='text-left'><span>{"C . "}  </span> {question['C']}</div>

            </div>
            <div className='bg-slate-900 px-3 py-2 mt-4 rounded-lg shadow-yellow-300 shadow-md cursor-pointer' onClick={handler}>
              <div id='D' className='text-left'><span>{"D . "}  </span> {question['D']}</div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
