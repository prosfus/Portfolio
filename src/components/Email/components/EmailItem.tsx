import {
  Forward,
  Paperclip,
  Reply,
  ReplyAll,
  SendHorizonal,
  Trash2,
  User,
} from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useState, useEffect } from "react";

type Mode = "collapsed" | "expanded" | "editing";
const modeSequence: Mode[] = [
  "collapsed",
  "expanded",
  "editing",
  "expanded",
  "collapsed",
];

export default function EmailItem({ auto }: { auto: boolean }) {
  const [mode, setMode] = useState<Mode>("collapsed");
  const isExpanded = mode === "expanded" || mode === "editing";

  useEffect(() => {
    if (!auto) return;

    let index = 0;

    setMode(modeSequence[index]);

    const interval = setInterval(() => {
      index = (index + 1) % modeSequence.length;
      setMode(modeSequence[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, [auto]);

  return (
    <motion.div
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.5, type: "spring" }}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <MotionConfig transition={{ duration: 0.5, type: "spring" }}>
        <motion.div
          layout
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            width: "520px",
            zIndex: 100,
          }}
          onClick={() =>
            setMode((prev) => (prev === "expanded" ? "collapsed" : "expanded"))
          }
        >
          <motion.div
            layoutId="first-row"
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              alignItems: "center",
            }}
          >
            <motion.div
              layoutId="email-user"
              style={{ display: "flex", alignItems: "center" }}
            >
              <User style={{ margin: "0 0.5rem" }} />
            </motion.div>
            <motion.div
              layoutId="email-title-container"
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <motion.h1 layout="position">Propuesta de trabajo</motion.h1>

              {mode === "collapsed" && (
                <motion.p
                  exit={{ opacity: 0, filter: "blur(6px)" }}
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Espero te encuentres muy bien. Quiero compartir contigo una...
                </motion.p>
              )}
              {isExpanded && (
                <motion.p
                  layoutId="jdiaosdjiosa"
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(6px)" }}
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "gray",
                  }}
                >
                  prosfus13@gmail.com
                </motion.p>
              )}
            </motion.div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(6px)", y: 50 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(6px)", y: 50, x: -100 }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    paddingRight: "0.5rem",
                  }}
                  layoutId="email-date"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMode("editing");
                  }}
                >
                  <Reply />
                  <ReplyAll />
                  <Forward />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          {isExpanded && (
            <motion.p
              layoutId="email-body"
              key="email-body"
              initial={{ opacity: 0, y: -100, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.03, duration: 0.5, type: "spring" }}
              style={{
                marginLeft: "2.5rem",
                marginTop: "0.5rem",
                whiteSpace: "pre-wrap",
                position: "relative",
              }}
            >
              {full_email}
            </motion.p>
          )}
        </motion.div>
        <div>
          <AnimatePresence mode="popLayout">
            {mode === "editing" && (
              <motion.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                  y: -100,
                  filter: "blur(6px)",
                }}
                animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ scale: 0.9, opacity: 0, y: -100, filter: "blur(6px)" }}
                style={{
                  width: "536px",
                  height: "100%",
                  backgroundColor: "#ffffff",
                  borderRadius: "0.5rem",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                      paddingLeft: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "14px" }}>Asunto:</span>
                    <input
                      type="text"
                      placeholder="Asunto"
                      value="Re: Propuesta de trabajo"
                      className="app-input"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                      paddingLeft: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "14px" }}>Destinatario:</span>
                    <input
                      type="text"
                      placeholder="Destinatario"
                      value="prosfus13@gmail.com"
                      className="app-input"
                    />
                  </div>
                  <textarea
                    placeholder="Cuerpo"
                    className="app-input"
                    rows={5}
                    style={{ resize: "none" }}
                  />
                </div>
                <div
                  style={{
                    borderTop: "1px solid #e0e0e0",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem",
                    gap: "0.5rem",
                  }}
                >
                  <button
                    className="app-button"
                    style={{
                      backgroundColor: "#FFFF",
                      color: "red",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMode("expanded");
                    }}
                  >
                    <Trash2 />
                  </button>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.5rem",
                    }}
                  >
                    <button
                      className="app-button"
                      style={{
                        backgroundColor: "#d9d9d9",
                        color: "#000000",
                      }}
                    >
                      <Paperclip />
                    </button>
                    <button
                      className="app-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMode("expanded");
                      }}
                    >
                      <SendHorizonal />
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "-2rem",
                    right: "50%",
                    background: "black",
                    width: "1px",
                    zIndex: 0,
                    transform: "translateX(50%)",
                    height: "2rem",
                  }}
                ></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MotionConfig>
    </motion.div>
  );
}

const full_email = `Estimado/a:

Espero te encuentres muy bien. Quiero compartir contigo una actualización del estado del proyecto PAU:

Desarrollo técnico:
El equipo de programación ha completado el módulo de autenticación y actualmente se encuentra en la fase de pruebas internas. Se estima que la integración final con la base de datos externa estará lista en aproximadamente 2 semanas.
`;
/* Diseño y UX:
El equipo de diseño ha finalizado las pantallas principales y estamos realizando pequeños ajustes estéticos basados en el feedback recibido. Esperamos tener las versiones definitivas de todos los elementos visuales para mediados de la próxima semana.

Próximos hitos:

15 de diciembre: Finalización de pruebas internas del módulo principal.
20 de diciembre: Entrega de la versión beta al equipo de QA externo.
30 de diciembre: Revisión final y preparación para el lanzamiento piloto.
Si tienes alguna pregunta o necesitas información adicional, no dudes en hacérmelo saber.

Saludos cordiales`; */
