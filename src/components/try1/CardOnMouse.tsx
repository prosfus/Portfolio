import { motion } from "motion/react";
import { useEffect, useState } from "react";

function CardOnMouse({ screenshot }: { screenshot: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Manejador de eventos para actualizar la posición del mouse
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Agregar el evento al document
    document.addEventListener("mousemove", handleMouseMove);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="card-on-mouse"
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        bounce: 0,
      }}
      onMouseMove={handleMouseMove}
      style={{
        borderRadius: "10px",
        border: "1px solid #9d9d9d",
        position: "absolute",
        left: mousePosition.x,
        top: mousePosition.y,
        transform: "translate(-50%, -50%)", // Centrar el componente en el cursor
        overflow: "hidden",
        pointerEvents: "none", // Evitar que el mouse interactúe con el componente
        color: "white",
        zIndex: 3,
        height: "125px",
        //mask: "radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 80%)",
      }}
    >
      <img src={screenshot} alt="screenshot" height={125} />
    </motion.div>
  );
}

export default CardOnMouse;
