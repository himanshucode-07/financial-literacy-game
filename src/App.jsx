import { useState } from "react"
import StartScreen from "./screens/StartScreen"
import GameScreen from "./screens/GameScreen"

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [money, setMoney] = useState(5000)
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [happiness, setHappiness] = useState(50)

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
      {
  {text: "Go to party (-₹500, +10 happiness)",
  effect: {
    money: -500,
    happiness: +10}
  }
}
    </>
  )
}

export default App

// 
