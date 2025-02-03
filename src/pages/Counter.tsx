import React, { useState, useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

// type Props = {}

// function Counter({}: Props) {
function Counter() {
  const [num, setNum] = useState<number>(0);
  const [incrementAmount, setIncrementAmount] = useState<number>(1);

  return (
    <div>
      <div className="text-5xl border-4 border-slate-800 shadow-md shadow-purple-500">
        {num}
      </div>
      <h1>Counter</h1>
      <div>
        <div>Enter increment amount:</div>
        <input
          title="Increment Amount Input"
          value={incrementAmount}
          type="number"
          onChange={(e) => setIncrementAmount(+e.target.value)}
        />
      </div>
      <div className="flex gap-8 justify-around">
        <button onClick={() => setNum(num - incrementAmount)}>-</button>
        <div>{num}</div>
        <button onClick={() => setNum(num + incrementAmount)}>+</button>
      </div>
    </div>
  );
}

export default Counter;
