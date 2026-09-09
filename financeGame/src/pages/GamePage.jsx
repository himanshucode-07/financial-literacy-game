import GameScreen from '../components/GameScreen';
import scenarios from '../data/scenarios';
import { useGame } from '../context/GameContext';

function GamePage() {
  const {
    money,
    savings,
    score,
    history,
    highScore,
    currentScenario,
    currentScenarioIndex,
    makeChoice,
    restartGame,
  } = useGame();

  if (currentScenario) {
    return (
      <GameScreen
        money={money}
        savings={savings}
        score={score}
        scenario={currentScenario}
        currentIndex={currentScenarioIndex}
        totalScenarios={scenarios.length}
        onChoice={makeChoice}
      />
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-10 text-center">
      <h2 className="text-2xl font-bold text-slate-100 mb-1">🎉 Game Complete!</h2>
      <p className="text-slate-300">Final Score: {score}</p>
      <p className="text-slate-300">Final Money: ₹{money}</p>
      <p className="text-slate-300 mb-2">Final Savings: ₹{savings}</p>

      {score === highScore && score > 0 && (
        <p className="text-yellow-400 font-bold mb-4">🏆 New High Score!</p>
      )}

      <h3 className="text-slate-400 text-sm font-semibold mt-6 mb-3">Your Decisions</h3>
      <ul className="text-left bg-slate-800 rounded-lg p-4 mb-6 divide-y divide-slate-700">
        {history.map((entry, index) => (
          <li key={index} className="py-2 text-sm text-slate-200">
            <strong>{entry.scenarioTitle}:</strong> {entry.choiceText}
          </li>
        ))}
      </ul>

      <button
        onClick={restartGame}
        className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Play Again
      </button>
    </div>
  );
}

export default GamePage;