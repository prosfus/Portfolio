import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, MotionConfig } from "motion/react";

interface ProyectCardProps {
  id: string;
  name: string;
  setItemHovered: (id?: string) => void;
  setItemSelected: (id?: string) => void;
  isSelected: boolean;
  isHovered: boolean;
}

export default function ProyectCard({
  id,
  name,
  setItemHovered,
  setItemSelected,
  isSelected,
  isHovered,
}: ProyectCardProps) {
  return (
    <motion.div
      initial={{ width: "18rem" }}
      layoutId={`proyect-card-${id}`}
      animate={{
        width: isSelected ? "auto" : "18rem",
        padding: isSelected ? "0rem 5rem" : "0rem 0rem",
      }}
      whileHover={{ width: "auto", padding: "0rem 5rem" }}
      onHoverStart={() => setItemHovered(id)}
      onHoverEnd={() => setItemHovered(undefined)}
      onClick={() => setItemSelected(isSelected ? undefined : id)}
      style={{
        height: "10rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        maxHeight: "10rem",
        minWidth: "18rem",
        overflow: "hidden",
        borderRight: "1px solid #AEAEAE",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatePresence>
          {(isHovered || isSelected) && (
            <motion.div
              layout
              style={{
                backgroundColor: isSelected ? "#ef444466" : "#9d9d9d66",
                borderRadius: "10px",
                padding: "1rem 2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                backdropFilter: "blur(6px)",
              }}
            >
              <MotionConfig
                transition={{
                  duration: 0.3,
                  type: "spring",
                  bounce: 0,
                }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {isHovered && !isSelected && (
                    <motion.div
                      key="see-more"
                      initial={{ opacity: 0, filter: "blur(6px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(6px)" }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <span>See more</span>
                      <ArrowUpRight size={20} />
                    </motion.div>
                  )}
                  {isSelected && (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, filter: "blur(6px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(6px)" }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <span>Close</span>
                      <X size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </MotionConfig>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        layoutId={`proyect-card-number-${id}`}
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <span>{id}.</span>
      </motion.div>
      <motion.h1
        layoutId={`proyect-card-name-${id}`}
        style={{ fontSize: "14rem", fontWeight: "bold" }}
      >
        {name}
      </motion.h1>
    </motion.div>
  );
}
