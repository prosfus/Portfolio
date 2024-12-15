import { motion } from "framer-motion";
import Email from "./components/Email";
import { useState } from "react";
import ProyectCard from "./ProyectCard";
import { AnimatePresence } from "motion/react";
import CTI from "./components/CTI";
import HighlightedComponent from "./components/HighlightedComponent";
import { Dashboard } from "./components/Dashboard";
import DialappletLogo from "./assets/dialapplet.webp";
import OSCARLogo from "./assets/oscar.png";

function App() {
  const [itemHovered, setItemHovered] = useState<string>();
  const [itemSelected, setItemSelected] = useState<string>();

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
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
            padding: "4rem 0 1rem 0",
          }}
        >
          {/*  <Link text="Pau Rostoll Fuset" link="https://www.google.com" /> */}
          <div>Pau Rostoll Fuset</div>
          <div>CV</div>
          <div>LinkedIn</div>
          <div>Github</div>
        </div>
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
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AnimatePresence mode="popLayout">
              <HighlightedComponent
                key="cti"
                id="00"
                itemHovered={itemHovered}
                itemSelected={itemSelected}
              >
                <CTI
                  key="cti"
                  auto={itemHovered === "00" && itemSelected !== "00"}
                />
              </HighlightedComponent>
              <HighlightedComponent
                key="email"
                id="01"
                itemHovered={itemHovered}
                itemSelected={itemSelected}
              >
                <Email
                  key="email"
                  auto={itemHovered === "01" && itemSelected !== "01"}
                />
              </HighlightedComponent>
              <HighlightedComponent
                key="dashboard"
                id="02"
                itemHovered={itemHovered}
                itemSelected={itemSelected}
              >
                <Dashboard />
              </HighlightedComponent>
            </AnimatePresence>
          </div>
        </div>
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
                  src={DialappletLogo}
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
                background: "#385cc7",
                zIndex: 2,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                bounce: 0,
              }}
            ></motion.div>
            <ProyectCard
              id={"00"}
              name="CTI"
              setItemHovered={setItemHovered}
              setItemSelected={setItemSelected}
              isSelected={itemSelected === "00"}
              isHovered={itemHovered === "00"}
            />
            <ProyectCard
              id={"01"}
              name="EMAIL"
              setItemHovered={setItemHovered}
              setItemSelected={setItemSelected}
              isSelected={itemSelected === "01"}
              isHovered={itemHovered === "01"}
            />
            <ProyectCard
              id={"02"}
              name="DASHBOARD"
              setItemHovered={setItemHovered}
              setItemSelected={setItemSelected}
              isSelected={itemSelected === "02"}
              isHovered={itemHovered === "02"}
            />
          </motion.div>
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
                  src={OSCARLogo}
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
                background: "#009688",
                zIndex: 2,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                bounce: 0,
              }}
            ></motion.div>
            <ProyectCard
              id={"00"}
              name="CTI"
              setItemHovered={setItemHovered}
              setItemSelected={setItemSelected}
              isSelected={itemSelected === "00"}
              isHovered={itemHovered === "00"}
            />
            <ProyectCard
              id={"01"}
              name="EMAIL"
              setItemHovered={setItemHovered}
              setItemSelected={setItemSelected}
              isSelected={itemSelected === "01"}
              isHovered={itemHovered === "01"}
            />
            <ProyectCard
              id={"02"}
              name="DASHBOARD"
              setItemHovered={setItemHovered}
              setItemSelected={setItemSelected}
              isSelected={itemSelected === "02"}
              isHovered={itemHovered === "02"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
