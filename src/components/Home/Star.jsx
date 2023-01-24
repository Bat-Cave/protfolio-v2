import { m } from "framer-motion";
import { getRandomInt } from "../../utils/tools";

const Star = ({ x, y, size, ...props }) => {
  const getAnimation = (num) => {
    if (num === 1) {
      return "animate-animate-star-1";
    }
    if (num === 2) {
      return "animate-animate-star-2";
    }
    if (num === 3) {
      return "animate-animate-star-3";
    }
    if (num === 4) {
      return "animate-animate-star-4";
    }
    if (num === 5) {
      return "animate-animate-star-5";
    }
    return "animate-animate-star-6";
  };

  return (
    <m.span
      style={{
        left: x,
        top: y,
        width: `${(size | 1) * 1.5}px`,
        height: `${(size | 1) * 1.5}px`,
        animationDelay: `${getRandomInt(0, 5)}s`,
      }}
      transition={{ type: "spring" }}
      className={`absolute bg-white rounded-full ${getAnimation(size | 1)}`}
      {...props}
    ></m.span>
  );
};

export default Star;
