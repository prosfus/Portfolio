import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import trucImage from "../../assets/truc.png";

export function Truconline() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={trucImage}
        alt="Truc Valencià"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0 }}
        style={{
          height: "500px",
          borderRadius: "12px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.a
              href="https://truconline.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              style={{
                backgroundColor: "#9d9d9d66",
                borderRadius: "10px",
                padding: "0.5rem 1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                backdropFilter: "blur(6px)",
                width: "max-content",
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
              transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            >
              <h3>truconline.com</h3>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
