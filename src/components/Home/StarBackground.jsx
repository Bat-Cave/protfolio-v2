import { m } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { getRandomInt } from "../../utils/tools";
import Star from "./Star";

const StarBackground = ({ starCount = 120, depth = 5 }) => {
  const { width, height } = useWindowSize();
  const [mounted, setMounted] = useState(false);

  const getRandomPos = () => {
    const x = getRandomInt(0, width || 0);
    const y = getRandomInt(0, height || 0);
    return { x, y };
  };

  const getRandomSize = () => {
    const size = getRandomInt(0, depth);
    return size;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <m.div className="w-full h-full">
      {mounted
        ? Array(starCount)
            .fill(false)
            .map((_, i) => {
              const { x, y } = getRandomPos();
              const size = getRandomSize();
              // const movementX = (mousePosition.x / width).toFixed(2);
              // const movementY = (mousePosition.y / height).toFixed(2);
              // console.log({ movementX, movementY });
              return (
                <Star key={`star-${i}`} x={x || 0} y={y || 0} size={size} />
              );
            })
        : null}
    </m.div>
  );
};

export default StarBackground;
