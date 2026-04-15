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

  useEffect(() => {
    localStorage.setItem("money", money)
    localStorage.setItem("scenarioIndex", scenarioIndex)
    localStorage.setItem("score", score)
  }, [money, scenarioIndex, score])

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
        />
      ) : (
        <StartScreen startGame={() => setIsGameStarted(true)} />
      )}
    </>
  )
}

export default App
