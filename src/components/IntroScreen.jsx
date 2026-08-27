function IntroScreen({ onStart, highScore }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-10 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-slate-100 mb-3">
        💰 Financial Literacy Game
      </h1>
      <p className="text-slate-400 mb-6 leading-relaxed">
        Learn to save, spend, and invest wisely — one decision at a time.
      </p>

      {highScore > 0 && (
        <p className="text-yellow-400 font-semibold mb-6">
          🏆 Your Best Score: {highScore}
        </p>
      )}

      <button
        onClick={onStart}
        className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Start Game
      </button>
    </div>
  );
}

export default IntroScreen;