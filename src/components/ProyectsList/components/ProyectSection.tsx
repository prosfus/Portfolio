import { useItemContext } from "@/context/useItemContext";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

interface Props {
  children?: React.ReactNode;
  logo?: string;
  color?: string;
}

export function ProyectSection({ children, logo, color }: Props) {
  const { itemHovered } = useItemContext();
  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <AnimatePresence>
        {itemHovered && (
          <motion.img
            src={logo}
            initial={{
              opacity: 0,
              filter: "blur(6px)",
              y: 10,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            exit={{
              opacity: 0,
              filter: "blur(6px)",
              y: 10,
            }}
            height={20}
            width={20}
            style={{
              position: "absolute",
              left: 2,

              y: -4,
              bottom: 6,
              zIndex: 20,
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              bounce: 0,
            }}
          />
        )}
      </AnimatePresence>
      <motion.div
        animate={{
          height: itemHovered ? "5px" : "2px",
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: color,
          zIndex: 2,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          bounce: 0,
        }}
      ></motion.div>
      {children}
    </motion.div>
  );
}
