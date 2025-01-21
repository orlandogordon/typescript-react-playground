import React, { useState } from "react";

// type Props = {}

// function Counter({}: Props) {
function Counter() {
  const [num, setNum] = useState<number>(0);
  const [incrementAmount, setIncrementAmount] = useState<number>(1);

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <div>Enter increment amount:</div>
        <input
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
