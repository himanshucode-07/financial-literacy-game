import scenarios from "../data/scenarios"
import StatsBar from "../components/StatsBar"

function GameScreen({ money, setMoney, scenarioIndex, setScenarioIndex }) {

  function restartGame() {
    setMoney(5000)
    setScenarioIndex(0)
  }

  if (money <= 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>💀 Game Over</h1>
        <p>You ran out of money!</p>
        <button onClick={restartGame}>Restart</button>
      </div>
    )
  }

  if (scenarioIndex >= scenarios.length) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>🏆 You Completed the Game!</h1>
        <p>Final Money: ₹{money}</p>
        <button onClick={restartGame}>Play Again</button>
      </div>
    )
  }

  const currentScenario = scenarios[scenarioIndex]

  function handleChoice(effect) {
    setMoney(money + effect)
    setScenarioIndex(scenarioIndex + 1)
  }

  return (
    <div>
      {/* 🔥 Top bar */}
      <StatsBar money={money} />

      {/* 🎮 Game content */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>{currentScenario.text}</h2>

        {currentScenario.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(choice.effect)}
            style={{
              display: "block",
              margin: "10px auto",
              padding: "10px 20px",
              cursor: "pointer"
            }}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GameScreen
