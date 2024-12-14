import { motion } from "motion/react";

interface Props {
  handleNumberClick: (number: string) => void;
  number: string;
}

export default function PadNumber({ handleNumberClick, number }: Props) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: "#9d9d9d66",
      }}
      style={{
        cursor: "pointer",
        backgroundColor: "#0000",
        height: "30px",
        width: "30px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => handleNumberClick(number)}
    >
      {number}
    </motion.div>
  );
}
