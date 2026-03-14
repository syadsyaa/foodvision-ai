const LoadingState = () => (
  <div className="space-y-3">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="rounded-xl h-24 shimmer" />
    ))}
  </div>
);

export default LoadingState;
