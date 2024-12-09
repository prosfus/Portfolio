import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./app.css";
import DialappletLogo from "./assets/dialapplet.webp";
import OscarLogo from "./assets/oscar.png";
import ProjectItemHeader from "./components/ProjectItemHeader";
import OscarScreenshot from "./assets/oscar-screenshoot.png";
import DialappletScreenshot from "./assets/dialapplet-screenshot.png";

const words = ["Frontend", "Design", "Product"];

function App() {
  const [word, setWord] = useState("Frontend");
  const [appSelected, setAppSelected] = useState(false);

  const setNextWord = useCallback(() => {
    const nextWord = words[words.indexOf(word) + 1] || words[0];
    setWord(nextWord);
  }, [word]);

  useEffect(() => {
    const interval = setInterval(setNextWord, 1500);
    return () => clearInterval(interval);
  }, [setNextWord]);

  return (
    <div
      className="app-container"
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{
          width: "40vw",
          minWidth: "40vw",
        }}
        animate={{
          width: appSelected ? "70vw" : "40vw",
          minWidth: appSelected ? "70vw" : "40vw",
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        style={{
          height: "100vh",
          boxSizing: "border-box",
          padding: "60px 20px",
          paddingRight: "0px",
          borderRight: "1px dashed #E0e0e0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "2vw" }}>Pau Rostoll Fuset</h1>
          </div>
          <div
            className="occupation-container"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "9px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <AnimatePresence mode="popLayout">
                {word.split("").map((letter, index, arr) => {
                  const count = arr
                    .slice(0, index)
                    .filter((l) => l === letter).length;
                  const layoutId = `${letter}-${count}`;

                  return (
                    <motion.span
                      key={layoutId}
                      layoutId={layoutId}
                      initial={{
                        y: -10,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: 10,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        type: "spring",
                        bounce: 0,
                      }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </AnimatePresence>
            </div>
            <motion.span layoutId="Engineer">Engineer</motion.span>
          </div>
        </div>
      </motion.div>
      <div
        className="project-container"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px 0px",
        }}
      >
        <ProjectItemHeader
          logo={DialappletLogo}
          title="DialApplet"
          number="01"
          screenshot={DialappletScreenshot}
          isAppSelected={appSelected}
          onClick={() => setAppSelected(!appSelected)}
        />
        <ProjectItemHeader
          logo={OscarLogo}
          title="OSCAR"
          number="02"
          screenshot={OscarScreenshot}
          isAppSelected={appSelected}
          onClick={() => setAppSelected(!appSelected)}
        />
      </div>
      {/* <div
        style={{
          flexGrow: 1,
          height: "100vh",
          boxSizing: "border-box",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProjectItemHeader
          logo={DialappletLogo}
          title="DialApplet"
          number="01"
          screenshot={OscarScreenshot}
          onClick={() => setAppSelected(!appSelected)}
        />
        <ProjectItemHeader
          logo={OscarLogo}
          title="OSCAR"
          number="02"
          screenshot={OscarScreenshot}
          onClick={() => setAppSelected(!appSelected)}
        />
      </div> */}
    </div>
  );
}

export default App;
