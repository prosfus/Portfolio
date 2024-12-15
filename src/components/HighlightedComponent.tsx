import { useItemContext } from "@/context/useItemContext";
import { ProyectItem } from "@/models/ProyectItem";
import { motion } from "motion/react";

interface Props {
  id: ProyectItem;
  children: React.ReactNode;
}

export default function HighlightedComponent({ id, children }: Props) {
  const { itemHovered, itemSelected } = useItemContext();
  const isHovered = itemHovered === id;
  const isSelected = itemSelected === id;

  return (
    (isHovered || (isSelected && !isHovered && !itemHovered)) && (
      <motion.div
        key={id}
        initial={{
          filter: "blur(4px)",
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          filter:
            itemHovered && itemSelected !== itemHovered
              ? "blur(4px)"
              : "blur(0px)",
          opacity: 1,
          scale: 1,
        }}
        exit={{
          filter: "blur(4px)",
          opacity: 0,
          scale: 1,
        }}
      >
        {children}
      </motion.div>
    )
  );
}
