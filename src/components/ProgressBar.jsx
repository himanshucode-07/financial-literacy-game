function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100

  return (
    <div style={{ width: "100%", background: "#ddd", height: "10px" }}>
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          background: "#4CAF50",
          transition: "0.3s"
        }}
      ></div>
    </div>
  )
}

export default ProgressBar