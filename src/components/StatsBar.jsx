function StatsBar({ money }) {
  return (
    <div style={{
      padding: "10px",
      background: "#eee",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h3>💰 Money: ₹{money}</h3>
    </div>
  )
}

export default StatsBar