import { useState } from "react"
import scenarios from "../data/scenarios"
import StatsBar from "../components/StatsBar"

function GameScreen({
  money,
  setMoney,
  scenarioIndex,
  setScenarioIndex,
  score,
  setScore,
  bestScore,

  // 🔥 History props
  history,
  setHistory
}) {

  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [moneyChange, setMoneyChange] = useState(null)

  // 🔥 fade animation state
  const [fade, setFade] = useState(true)

  function restartGame() {
    setMoney(5000)
    setScenarioIndex(0)
    setScore(0)

    // 🔥 clear history
    setHistory([])

    localStorage.clear()
  }

  // 💀 Game Over
  if (money <= 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>💀 Game Over</h1>

        <p>Final Score: {score}</p>

        {/* 🔥 Best score */}
        <p>🏆 Best Score: {bestScore}</p>

        <button onClick={restartGame}>
          Restart
        </button>
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

        {/* 🔥 Best score */}
        <p>🏆 Best Score: {bestScore}</p>

        <button onClick={restartGame}>
          Play Again
        </button>
      </div>
    )
  }

  const currentScenario = scenarios[scenarioIndex]

  // 🔥 Progress percentage
  const progress =
    ((scenarioIndex + 1) / scenarios.length) * 100

  function handleChoice(effect, index) {

    if (isAnswered) return

    setIsAnswered(true)
    setSelectedIndex(index)

    // 🔥 fade out
    setFade(false)

    // 🔥 show money change
    setMoneyChange(effect.money)

    setMoney(money + effect.money)
    setScore(score + effect.score)

    // 🔥 Add to history
    setHistory((prev) => [
      ...prev,
      {
        text: currentScenario.text,
        amount: effect.money
      }
    ])

    setTimeout(() => {

      setScenarioIndex(scenarioIndex + 1)

      setSelectedIndex(null)
      setIsAnswered(false)
      setMoneyChange(null)

      // 🔥 fade in
      setFade(true)

    }, 500)
  }

  return (
    <div>

      <StatsBar money={money} score={score} />

      {/* 🔥 Animated content */}
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.3s ease"
        }}
      >

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

        {/* 🔥 Progress bar */}
        <div
          style={{
            width: "80%",
            height: "10px",
            background: "#ddd",
            margin: "20px auto",
            borderRadius: "10px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "green",
              transition: "0.3s"
            }}
          />
        </div>

        {/* 🔥 Best score display */}
        <p>
          🏆 Best Score: {bestScore}
        </p>

        {currentScenario.choices.map((choice, index) => {

          const isSelected = selectedIndex === index

          let bgColor = "#ddd"

          if (isSelected) {
            bgColor =
              choice.effect.money >= 0
                ? "green"
                : "red"
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
                borderRadius: "8px",

                // 🔥 smooth animation
                transition: "all 0.2s ease",

                // 🔥 scale effect
                transform: isSelected
                  ? "scale(1.05)"
                  : "scale(1)"
              }}
            >
              {choice.text}
            </button>
          )
        })}

        {/* 🔥 History Section */}
        <div
          style={{
            marginTop: "30px"
          }}
        >
          <h3>📜 History</h3>

          {history.map((item, index) => (
            <p key={index}>
              {item.amount >= 0 ? "✅" : "❌"}{" "}
              {item.text}
              {" "}
              ({item.amount >= 0 ? "+" : ""}
              ₹{item.amount})
            </p>
          ))}
        </div>

      </div>
    </div>
  )
}

export default GameScreen