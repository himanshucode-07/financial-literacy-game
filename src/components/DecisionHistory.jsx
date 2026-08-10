function DecisionHistory({ history }) {
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px"
      }}
    >
      <h3>📜 Decision History</h3>

      {history.length === 0 ? (
        <p>No decisions yet.</p>
      ) : (
        history.map((item, index) => (
          <p key={index}>
            {item.amount >= 0 ? "✅" : "❌"}{" "}
            {item.text}{" "}
            ({item.amount >= 0 ? "+" : ""}
            ₹{item.amount})
          </p>
        ))
      )}
    </div>
  )
}

export default DecisionHistory