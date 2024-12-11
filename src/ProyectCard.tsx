import { motion } from "framer-motion";

interface ProyectCardProps {
  id: string;
  name: string;
  setItemHovered: (id?: string) => void;
  setItemSelected: (id?: string) => void;
  isSelected: boolean;
}

export default function ProyectCard({
  id,
  name,
  setItemHovered,
  setItemSelected,
  isSelected,
}: ProyectCardProps) {
  return (
    <motion.div
      initial={{ width: "18rem" }}
      layoutId={`proyect-card-${id}`}
      animate={{ width: isSelected ? "50rem" : "18rem" }}
      whileHover={{ width: "50rem", paddingLeft: "5rem" }}
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
        overflow: "hidden",
        borderRight: "1px solid #AEAEAE",
        cursor: "pointer",
      }}
    >
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
        style={{ fontSize: "14rem" }}
      >
        {name}
      </motion.h1>
    </motion.div>
  );
}
