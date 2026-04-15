function StatsBar({ money, score }) {
  return (
    <div style={{
      padding: "10px",
      background: "#333",
      color: "white",
      display: "flex",
      justifyContent: "space-around"
    }}>
      <h3>💰 ₹{money}</h3>
      <h3>🏆 Score: {score}</h3>
    </div>
  )
}

export default StatsBar