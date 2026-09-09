import ProgressBar from './ProgressBar';

function GameScreen({ money, savings, score, scenario, currentIndex, totalScenarios, onChoice }) {
  return (
    <div className="max-w-md mx-auto px-6 py-10">
      {/* Stats chips */}
      <div className="flex justify-between gap-2 mb-6">
        <div className="flex-1 bg-slate-800 rounded-lg px-3 py-2 text-center">
          <div className="text-xs text-slate-400">Money</div>
          <div className="text-sm font-semibold text-slate-100">💰 ₹{money}</div>
        </div>
        <div className="flex-1 bg-slate-800 rounded-lg px-3 py-2 text-center">
          <div className="text-xs text-slate-400">Savings</div>
          <div className="text-sm font-semibold text-slate-100">🏦 ₹{savings}</div>
        </div>
        <div className="flex-1 bg-slate-800 rounded-lg px-3 py-2 text-center">
          <div className="text-xs text-slate-400">Score</div>
          <div className="text-sm font-semibold text-slate-100">⭐ {score}</div>
        </div>
      </div>

      <ProgressBar current={currentIndex + 1} total={totalScenarios} />

      {/* Scenario card */}
      <div className="bg-slate-800 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-100 mb-2">{scenario.title}</h2>
        <p className="text-slate-400 leading-relaxed">{scenario.description}</p>
      </div>

      {/* Choices */}
      <div className="flex flex-col gap-3">
        {scenario.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onChoice(choice)}
            className="text-left bg-slate-900 border border-slate-700 hover:border-green-500 hover:bg-slate-800 text-slate-100 px-4 py-3 rounded-lg transition-colors"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameScreen;