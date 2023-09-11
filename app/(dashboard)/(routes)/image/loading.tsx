import React from 'react';

export default function Loading() {
  return (
    <div>
      <p className="text-3xl">Images</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        {[...Array(20).keys()].map((i) => (
          <li key={i}>
            <span
              className="inline-block h-5 animate-pulse"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: '1s',
              }}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
