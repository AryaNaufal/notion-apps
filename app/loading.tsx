export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-6 w-6">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex h-6 w-6 rounded-full bg-primary"></span>
      </div>
    </div>
  );
}
