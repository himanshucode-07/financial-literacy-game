function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-6">
      <div className="text-sm text-slate-400 mb-1.5">
        Scenario {current} of {total}
      </div>
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;