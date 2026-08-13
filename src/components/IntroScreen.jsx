function IntroScreen({ onStart }) {
  return (
    <div className="intro-screen">
      <h1>💰 Financial Literacy Game</h1>
      <p>Learn to save, spend, and invest wisely — one decision at a time.</p>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
}

export default IntroScreen;