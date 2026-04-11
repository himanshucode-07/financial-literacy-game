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

  // 🔥 Save to localStorage
  useEffect(() => {
    localStorage.setItem("money", money)
    localStorage.setItem("scenarioIndex", scenarioIndex)
  }, [money, scenarioIndex])

  return (
    <>
      {isGameStarted ? (
        <GameScreen
          money={money}
          setMoney={setMoney}
          scenarioIndex={scenarioIndex}
          setScenarioIndex={setScenarioIndex}
        />
      ) : (
        <StartScreen startGame={() => setIsGameStarted(true)} />
      )}
    </>
  )
}

export default App
