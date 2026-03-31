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
