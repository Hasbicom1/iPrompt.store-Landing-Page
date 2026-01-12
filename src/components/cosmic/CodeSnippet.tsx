import React from 'react';
export function CodeSnippet({
  className = '',
  delay = 0
}: {
  className?: string;
  delay?: number;
}) {
  return <div className={`font-mono text-[10px] leading-tight text-cyan-500/60 p-4 border border-cyan-500/20 bg-black/40 backdrop-blur-sm rounded ${className}`}>
      <div className="flex gap-2 mb-2 border-b border-cyan-500/20 pb-1">
        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
      </div>
      <pre className="opacity-80">
        {`interface NeuralNode {
  id: string;
  weights: Float32Array;
  activation: 'relu' | 'sigmoid';
  bias: number;
}

function propagate(input: Tensor): Tensor {
  return layers.reduce((acc, layer) => {
    return layer.compute(acc);
  }, input);
}

// Optimizing gradient descent...
// Loss: 0.00421
// Accuracy: 99.8%`}
      </pre>
    </div>;
}