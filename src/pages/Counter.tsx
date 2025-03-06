import { useState } from "react";
import CounterComponent from "../components/Counter/CounterComponent";

function Counter() {
  let [count, setCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState<number>(1);
  console.log(count)
  return (
    <div>
      <h1>Counter</h1>
      <div className="my-6">
        <div>Enter increment amount:</div>
        <input
          title="Increment Amount Input"
          value={incrementAmount}
          type="number"
          onChange={(e) => setIncrementAmount(+e.target.value)}
        />
      </div>
      <div className="flex gap-8 justify-around">
        <button onClick={() => setCount(count - incrementAmount)}>-</button>
        <CounterComponent value={count} />
        <button onClick={() => setCount(count + incrementAmount)}>+</button>
      </div>
    </div>
  );
}

export default Counter;
