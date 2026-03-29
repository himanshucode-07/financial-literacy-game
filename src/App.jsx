import { useState } from "react"
import StartScreen from "./screens/StartScreen"
import GameScreen from "./screens/GameScreen"

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [money, setMoney] = useState(5000)
  const [scenarioIndex, setScenarioIndex] = useState(0)

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

// 
