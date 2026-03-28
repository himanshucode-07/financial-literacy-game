function StartScreen({ startGame }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>💰 Financial Literacy Game</h1>
      <p>Make smart choices and grow your money!</p>

      <button
        onClick={startGame}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Start Game
      </button>
    </div>
  )
}

export default StartScreen