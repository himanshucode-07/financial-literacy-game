import scenarios from '../data/scenarios';

function GameScreen({ money, score, onChoice }) {
  const currentScenario = scenarios[0]; // abhi hardcoded, Day 4 mein badlega

  return (
    <div className="game-screen">
      <div className="stats-bar">
        <span>💰 ₹{money}</span>
        <span>⭐ Score: {score}</span>
      </div>

      <h2>{currentScenario.title}</h2>
      <p>{currentScenario.description}</p>

      <div className="choices">
        {currentScenario.choices.map((choice, index) => (
          <button key={index} onClick={() => onChoice(choice)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameScreen;