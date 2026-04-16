import scenarios from "../data/scenarios"
import StatsBar from "../components/StatsBar"

const [isAnswered, setIsAnswered] = useState(false)

function GameScreen({
  money,
  setMoney,
  scenarioIndex,
  setScenarioIndex,
  score,
  setScore
}) {

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

  function handleChoice(effect) {
    setMoney(money + effect.money)
    setScore(score + effect.score)
    setScenarioIndex(scenarioIndex + 1)
  }
  function handleChoice(effect) {
  if (isAnswered) return

  setIsAnswered(true)

  setMoney(money + effect.money)
  setScore(score + effect.score)

  setTimeout(() => {
    setScenarioIndex(scenarioIndex + 1)
    setIsAnswered(false)
  }, 500)
}

  return (
    
    <div>
      <StatsBar money={money} score={score} />

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
    <button
  disabled={isAnswered}
  ...
></button>

    
  )
}

export default GameScreen
