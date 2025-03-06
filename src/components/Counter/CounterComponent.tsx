import Digit from "./Digit";

type Props = {
  value: number
}

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

function CounterComponent({ value }: Props) {  
  return (
    <div
      style={{ fontSize }}
      className="flex space-x-3 overflow-hidden rounded bg-white px-2 leading-none text-gray-900"
    >
      <div style={{ height }} className={"relative w-[1ch] hidden" + (value <= 0 ? 'tabular-nums' : '')}>-</div>
      <Digit place={100} value={Math.abs(value)} />
      <Digit place={10} value={Math.abs(value)} />
      <Digit place={1} value={Math.abs(value)} />
    </div>
  );
}

export default CounterComponent