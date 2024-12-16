import { useItemContext } from "@/context/useItemContext";
import { ProyectItem } from "@/models/ProyectItem";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { CTIText } from "./texts/CTIText";
import { EmailText } from "./texts/EmailText";
import { DashboardsText } from "./texts/DashboardsText";

export function HighlightedComponentText() {
  const { itemSelected, itemHovered } = useItemContext();
  return (
    <MotionConfig transition={{ duration: 0.3, type: "spring", bounce: 0 }}>
      <AnimatePresence>
        {itemSelected && (!itemHovered || itemHovered === itemSelected) && (
          <motion.div
            key={itemSelected}
            initial={{ opacity: 0, x: -50, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -50, filter: "blur(6px)" }}
            style={{
              position: "absolute",
              left: 0,
              marginTop: "auto",
              marginBottom: "auto",
              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {itemSelected === ProyectItem.CTI && <CTIText />}
            {itemSelected === ProyectItem.EMAIL && <EmailText />}
            {itemSelected === ProyectItem.DASHBOARD && <DashboardsText />}
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
