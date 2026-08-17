function GameScreen({ money, score, scenario, onChoice }) {
  return (
    <div className="game-screen">
      <div className="stats-bar">
        <span>💰 ₹{money}</span>
        <span>⭐ Score: {score}</span>
      </div>

      <h2>{scenario.title}</h2>
      <p>{scenario.description}</p>

      <div className="choices">
        {scenario.choices.map((choice, index) => (
          <button key={index} onClick={() => onChoice(choice)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameScreen;