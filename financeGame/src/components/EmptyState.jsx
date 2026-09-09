function EmptyState({ icon = "📭", title, description }) {
  return (
    <div className="text-center bg-slate-800 rounded-lg p-8">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="text-slate-200 font-semibold mb-1">{title}</h4>
      {description && (
        <p className="text-slate-400 text-sm">{description}</p>
      )}
    </div>
  );
}

export default EmptyState;