import { useState } from "react"
import scenarios from "../data/scenarios"
import StatsBar from "../components/StatsBar"

function GameScreen({
  money,
  setMoney,
  scenarioIndex,
  setScenarioIndex,
  score,
  setScore
}) {

  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [moneyChange, setMoneyChange] = useState(null)

  function restartGame() {
    setMoney(5000)
    setScenarioIndex(0)
    setScore(0)
    localStorage.clear()
  }

  // 💀 Game Over
  if (money <= 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>💀 Game Over</h1>
        <p>Final Score: {score}</p>
        <button onClick={restartGame}>Restart</button>
      </div>
    )
  }

  // 🏆 Game Complete
  if (scenarioIndex >= scenarios.length) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>🏆 You Completed the Game!</h1>
        <p>Final Money: ₹{money}</p>
        <p>Score: {score}</p>
        <button onClick={restartGame}>Play Again</button>
      </div>
    )
  }

  const currentScenario = scenarios[scenarioIndex]

  function handleChoice(effect, index) {

    if (isAnswered) return

    setIsAnswered(true)
    setSelectedIndex(index)

    // 🔥 show money change
    setMoneyChange(effect.money)

    setMoney(money + effect.money)
    setScore(score + effect.score)

    setTimeout(() => {
      setScenarioIndex(scenarioIndex + 1)
      setSelectedIndex(null)
      setIsAnswered(false)
      setMoneyChange(null)
    }, 500)
  }

  return (
    <div>

      <StatsBar money={money} score={score} />

      <div style={{ textAlign: "center", marginTop: "50px" }}>

        <h2>{currentScenario.text}</h2>

        {/* 🔥 Money change feedback */}
        {moneyChange !== null && (
          <h3
            style={{
              color: moneyChange >= 0 ? "green" : "red"
            }}
          >
            {moneyChange >= 0 ? "+" : ""}
            ₹{moneyChange}
          </h3>
        )}

        <p>
          Question {scenarioIndex + 1} / {scenarios.length}
        </p>

        {currentScenario.choices.map((choice, index) => {

          const isSelected = selectedIndex === index

          let bgColor = "#ddd"

          if (isSelected) {
            bgColor =
              choice.effect.money >= 0 ? "green" : "red"
          }

          return (
            <button
              key={index}
              disabled={isAnswered}
              onClick={() =>
                handleChoice(choice.effect, index)
              }
              style={{
                display: "block",
                margin: "10px auto",
                padding: "10px 20px",
                cursor: "pointer",
                background: bgColor,
                color: isSelected ? "white" : "black",
                border: "none",
                borderRadius: "8px"
              }}
            >
              {choice.text}
            </button>
          )
        })}

      </div>
    </div>
  )
}

export default GameScreen