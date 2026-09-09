function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-10 h-10 border-4 border-slate-700 border-t-green-500 rounded-full animate-spin"></div>
      <p className="text-slate-400 text-sm mt-4">{message}</p>
    </div>
  );
}

export default LoadingSpinner;