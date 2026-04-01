function GameScreen({ money, setMoney, scenarioIndex, setScenarioIndex }) {

  const scenarios = [
    {
      text: "You received your salary ₹5000",
      choices: [
        { text: "Save money (+₹1000)", effect: +1000 },
        { text: "Spend on shopping (-₹1000)", effect: -1000 }
      ]
    },
    {
      text: "Your friend invites you to a party",
      choices: [
        { text: "Go to party (-₹500)", effect: -500 },
        { text: "Stay at home (+₹0)", effect: 0 }
      ]
    }
  ]

  // 🧠 Restart function
  function restartGame() {
    setMoney(5000)
    setScenarioIndex(0)
  }

  // 💀 Game Over
  if (money <= 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>💀 Game Over</h1>
        <p>You ran out of money!</p>
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
  )
}

export default GameScreen
