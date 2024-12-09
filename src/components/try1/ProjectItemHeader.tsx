import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import CardOnMouse from "./CardOnMouse";

interface Props {
  logo: string;
  title: string;
  number: string;
  screenshot: string;
  isAppSelected: boolean;
  onClick: () => void;
}

function ProjectItemHeader({
  logo,
  title,
  number,
  screenshot,
  onClick,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="project-item-header"
        style={{
          width: "70vw",
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid #e0e0e0",
          padding: "20px",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <img src={logo} alt={title} height={20} width={20} />
          <span style={{ fontSize: "12px" }}>{number}.</span>
        </div>

        <h1
          style={{
            fontWeight: "lighter",
            fontSize: "64px",
            zIndex: isHovered ? 4 : 2,
          }}
        >
          {title}
        </h1>
      </motion.div>
      <AnimatePresence>
        {isHovered && <CardOnMouse screenshot={screenshot} />}
      </AnimatePresence>
    </>
  );
}

export default ProjectItemHeader;
