import { Link } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import EmptyState from '../components/EmptyState';

function DashboardPage() {
  const { money, savings, score, highScore, history, gameStarted } = useGame();

  return (
    <div className="max-w-md mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">📊 Dashboard</h2>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-slate-800 rounded-lg p-4 text-center">
          <div className="text-xs text-slate-400 mb-1">Current Money</div>
          <div className="text-lg font-bold text-slate-100">₹{money}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-center">
          <div className="text-xs text-slate-400 mb-1">Current Savings</div>
          <div className="text-lg font-bold text-slate-100">₹{savings}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-center">
          <div className="text-xs text-slate-400 mb-1">Current Score</div>
          <div className="text-lg font-bold text-slate-100">{score}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-center">
          <div className="text-xs text-slate-400 mb-1">High Score</div>
          <div className="text-lg font-bold text-yellow-400">🏆 {highScore}</div>
        </div>
      </div>

      <h3 className="text-slate-400 text-sm font-semibold mb-3">
        Decisions This Session
      </h3>

      {history.length === 0 ? (
        <EmptyState
          icon={gameStarted ? "🎯" : "🎮"}
          title={gameStarted ? "No decisions yet" : "No game in progress"}
          description={
            gameStarted
              ? "Go make some choices in the game!"
              : "Start a game to see your decisions here."
          }
        />
      ) : (
        <ul className="text-left bg-slate-800 rounded-lg p-4 mb-6 divide-y divide-slate-700">
          {history.map((entry, index) => (
            <li key={index} className="py-2 text-sm text-slate-200">
              <strong>{entry.scenarioTitle}:</strong> {entry.choiceText}
            </li>
          ))}
        </ul>
      )}

      <Link
        to="/"
        className="inline-block mt-4 text-green-400 hover:text-green-300 text-sm font-medium"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default DashboardPage;