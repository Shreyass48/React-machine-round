"use client";

import { useEffect, useState } from "react";

function ProgressBar({ progress }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100); // Delay to trigger the animation

    return () => clearTimeout(timeout);
  }, [progress]);
  return (
    <div className="p-2 max-w-2xl mx-auto">
      <div className="w-full overflow-hidden bg-gray-200 rounded-full h-5 my-2">
        <div
          className="bg-blue-500 h-6 rounded-full text-white text-right pr-2 text-sm transition duration-300 ease-in"
          style={{
            // width: `${progress}%`
            transform: `translateX(${animatedProgress - 100}%)`,
          }}
          aria-valuenow={animatedProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {animatedProgress}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
