import scenarios from '../data/scenarios';

function GameScreen() {
  const currentScenario = scenarios[0]; // abhi hardcoded — pehla scenario

  return (
    <div className="game-screen">
      <h2>{currentScenario.title}</h2>
      <p>{currentScenario.description}</p>

      <div className="choices">
        {currentScenario.choices.map((choice, index) => (
          <button key={index}>{choice.text}</button>
        ))}
      </div>
    </div>
  );
}

export default GameScreen;