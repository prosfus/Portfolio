import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AudioBars() {
  const [barHeights, setBarHeights] = useState<number[]>([]);
  const numBars = 7;
  const maxHeight = 100;

  const smoothRandom = (prev: number) => {
    return Math.max(0, Math.min(1, prev + (Math.random() - 0.5) * 0.3));
  };

  // Update bar heights
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBarHeights((prevHeights) =>
        prevHeights.length
          ? prevHeights.map(smoothRandom)
          : Array(numBars)
              .fill(0)
              .map(() => Math.random())
      );
    }, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 20,
      }}
    >
      {barHeights.map((height, index) => (
        <motion.div
          key={index}
          className="w-0.5 mx-0.5 bg-green-500"
          animate={{
            height: `${height * maxHeight}%`,
            marginTop: `${((1 - height) * maxHeight) / 2}%`,
            marginBottom: `${((1 - height) * maxHeight) / 2}%`,
          }}
          style={{
            height: `${height * maxHeight}%`,
            backgroundColor: "#00FF00",
            width: "2px",
            margin: "0 1px",
          }}
        />
      ))}
    </div>
  );
}
