import { motion, useTransform, MotionValue } from "framer-motion";

type Props = {
    mv: MotionValue,
    number: number
}

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

function Number({ mv, number }: Props) {
    let y = useTransform(mv, (latest) => {
        let placeValue = latest % 10;
        let offset = (10 + number - placeValue) % 10;
    
        let memo = offset * height;
    
        if (offset > 5) {
          memo -= 10 * height;
        }
    
        return memo;
      });
      console.log(y)
      return (
        <motion.span
          style={{ y }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {number}
        </motion.span>
      );
}

export default Number