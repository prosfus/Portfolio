import Email from "./components/Email";
import { AnimatePresence } from "motion/react";
import CTI from "./components/CTI";
import HighlightedComponent from "./components/HighlightedComponent";
import { Dashboard } from "./components/Dashboard";
import { ProyectsList } from "./components/ProyectsList";
import { ProyectItem } from "./models/ProyectItem";
import { TopBar } from "./components/Topbar";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#d9d9d9",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          borderLeft: "1px solid #AEAEAE",
          margin: "0 2rem",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <TopBar />
        <div
          style={{
            flexGrow: 1,
            flexBasis: 0,
            overflow: "hidden",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
          </AnimatePresence>
        </div>
        <ProyectsList />
      </div>
    </div>
  );
}

export default App;
