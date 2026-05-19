import { useState, useEffect } from "react"
import StartScreen from "./screens/StartScreen"
import GameScreen from "./screens/GameScreen"

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const [money, setMoney] = useState(() => {
    return Number(localStorage.getItem("money")) || 5000
  })

  const [scenarioIndex, setScenarioIndex] = useState(() => {
    return Number(localStorage.getItem("scenarioIndex")) || 0
  })

  const [score, setScore] = useState(() => {
    return Number(localStorage.getItem("score")) || 0
  })

  // 🔥 Best score state
  const [bestScore, setBestScore] = useState(() => {
    return Number(localStorage.getItem("bestScore")) || 0
  })

  // 🔥 Decision history state
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("history")) || []
  })

  // 🔥 Save progress
  useEffect(() => {
    localStorage.setItem("money", money)
    localStorage.setItem("scenarioIndex", scenarioIndex)
    localStorage.setItem("score", score)

    // 🔥 Save history
    localStorage.setItem(
      "history",
      JSON.stringify(history)
    )

  }, [money, scenarioIndex, score, history])

  // 🔥 Update best score
  useEffect(() => {

    if (score > bestScore) {
      setBestScore(score)
      localStorage.setItem("bestScore", score)
    }

  }, [score, bestScore])

  return (
    <>
      {isGameStarted ? (
        <GameScreen
          money={money}
          setMoney={setMoney}
          scenarioIndex={scenarioIndex}
          setScenarioIndex={setScenarioIndex}
          score={score}
          setScore={setScore}

          // 🔥 Best score props
          bestScore={bestScore}

          // 🔥 History props
          history={history}
          setHistory={setHistory}
        />
      ) : (
        <StartScreen
          startGame={() => setIsGameStarted(true)}
        />
      )}
    </>
  )
}

export default App