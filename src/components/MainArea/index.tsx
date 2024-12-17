import { AnimatePresence } from "motion/react";
import HighlightedComponent from "../HighlightedComponent";
import { ProyectItem } from "@/models/ProyectItem";
import CTI from "../CTI";
import { Dashboard } from "../Dashboard";
import Email from "../Email";
import { HighlightedComponentText } from "./components/HighlightedComponentText";
import { OSCAR } from "../OSCAR";

function MainArea() {
  return (
    <div
      style={{
        flexGrow: 1,
        flexBasis: 0,
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <HighlightedComponentText />

      <AnimatePresence mode="popLayout">
        <HighlightedComponent key="cti" id={ProyectItem.CTI}>
          <CTI key="cti-content" />
        </HighlightedComponent>
        <HighlightedComponent key="email" id={ProyectItem.EMAIL}>
          <Email key="email-content" />
        </HighlightedComponent>
        <HighlightedComponent key="dashboard" id={ProyectItem.DASHBOARD}>
          <Dashboard key="dashboard-content" />
        </HighlightedComponent>
        <HighlightedComponent key="OSCAR" id={ProyectItem.OSCAR}>
          <OSCAR key="OSCAR-content" />
        </HighlightedComponent>
      </AnimatePresence>
    </div>
  );
}

export default MainArea;
