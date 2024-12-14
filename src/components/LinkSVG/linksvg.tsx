import { motion } from "framer-motion";

interface Props {
  isHover: boolean;
}

function LinkSVG({ isHover }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="80"
        x2="39"
        y2="41"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <motion.path
        animate={isHover ? { x: 50, y: -50 } : { x: 0, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        d="M0,40 L40,40 L40,80"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <motion.path
        initial={isHover ? { x: -50, y: 50 } : { x: 0, y: 0 }}
        animate={isHover ? { x: 0, y: 0 } : { x: -50, y: 50 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        d="M0,40 L40,40 L40,80"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default LinkSVG;
