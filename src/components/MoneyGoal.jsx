function MoneyGoal({ money }) {

  const target = 10000

  const progress = Math.min((money / target) * 100, 100)

  return (
    <div
      style={{
        width: "80%",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        textAlign: "center"
      }}
    >
      <h3>🎯 Savings Goal</h3>

      <p>
        ₹{money} / ₹{target}
      </p>

      <div
        style={{
          width: "100%",
          height: "12px",
          background: "#ddd",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "green",
            transition: "width 0.3s ease"
          }}
        />
      </div>

      <p>
        {money >= target
          ? "🎉 Goal reached!"
          : `₹${target - money} more to reach your goal`}
      </p>
    </div>
  )
}

export default MoneyGoal