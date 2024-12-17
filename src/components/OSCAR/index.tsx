import { useState } from "react";
import OSCARLogin from "../../assets/oscar-login.png";
import { AnimatePresence, motion } from "motion/react";

export function OSCAR() {
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
      <div
        style={{
          width: "600px",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 75%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 75%)",
          maskSize: "cover",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskSize: "cover",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          overflow: "hidden",
        }}
      >
        <img src={OSCARLogin} height={600} />
      </div>
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
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
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
              }}
              transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            >
              <h3>
                I am currently developing a version with mock data to offer a
                full demo
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
