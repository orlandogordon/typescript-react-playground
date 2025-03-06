import { useEffect } from "react";
import { useSpring } from "framer-motion";
import Number from "./Number";

type Props = {
    place: number,
    value: number
}

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

function Digit({ place, value }: Props) {
    console.log(`digit value: ${value}, place: ${place}`)
    let valueRoundedToPlace = Math.floor(value / place);
    console.log(`value rounded: ${valueRoundedToPlace}`)
    let animatedValue = useSpring(valueRoundedToPlace);
  
    useEffect(() => {
      animatedValue.set(valueRoundedToPlace);
    }, [animatedValue, valueRoundedToPlace]);
  
    return (
      <div style={{ height }} className="relative w-[1ch] tabular-nums">
        {[...Array(10).keys()].map((i) => (
          <Number key={i} mv={animatedValue} number={i} />
        ))}
      </div>
    );
}

export default Digit