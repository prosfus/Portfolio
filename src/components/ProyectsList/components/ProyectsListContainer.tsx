import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
}

export function ProyectsListContainer({ children }: Props) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          borderRight: "1px solid #AEAEAE",
          height: "2rem",
          width: "calc(10rem + 1px)",
          transform: "rotate(-90deg)",
          transformOrigin: "left bottom",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.h1
          style={{ fontSize: "2rem" }}
          initial={{ x: -185 }}
          animate={{ x: 185 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
        >
          SHOWCASE
        </motion.h1>
      </div>
      {children}
    </div>
  );
}
