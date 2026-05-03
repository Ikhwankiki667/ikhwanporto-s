"use client";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg">
      <div className="grid-pattern"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
}
