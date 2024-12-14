import {
  ArrowUpRight,
  Delete,
  Phone,
  PhoneOffIcon,
  PhoneOutgoing,
  X,
} from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useRef, useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import AudioBars from "./components/AudioBars";
import PadNumber from "./components/PadNumber";

interface Props {
  auto?: boolean;
}

function CTI({ auto }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const [ref, bounds] = useMeasure();
  const [isPadOpen, setIsPadOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleMinimize() {
    setIsPadOpen(false);
    setIsHistoryOpen(false);
    setIsInCall(false);
    setIsHovering(false);
    setPhoneNumber("");
  }

  function handleHover() {
    setIsHovering(true);
  }

  function handleOpenPad() {
    setIsPadOpen(true);
    setIsHistoryOpen(false);
  }

  function handleWriteInput() {
    setPhoneNumber("676982812");
  }

  function handleCall() {
    setIsPadOpen(false);
    setIsInCall(true);
  }

  function handleHangup() {
    setIsInCall(false);
    setPhoneNumber("");
  }

  const [isInCall, setIsInCall] = useState(false);

  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (isPadOpen) return;
    setHoverTimeout(setTimeout(() => setIsHovering(false), 500));
  };

  const handleNumberClick = (number: string) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart!;
      const end = inputRef.current.selectionEnd!;
      const newValue =
        phoneNumber.slice(0, start) + number + phoneNumber.slice(end);
      setPhoneNumber(newValue);
      setTimeout(() => {
        inputRef.current?.setSelectionRange(
          start + number.length,
          start + number.length
        );
        inputRef.current?.focus();
      }, 0);
    }
  };

  useEffect(() => {
    if (!auto) {
      handleMinimize();
      return;
    }

    const actions = [
      handleHover,
      handleOpenPad,
      handleWriteInput,
      handleCall,
      handleHangup,
      handleMinimize,
    ];

    let index = 0;

    const interval = setInterval(() => {
      actions[index]();
      index = (index + 1) % actions.length;
    }, 900);

    return () => clearInterval(interval);
  }, [auto]);

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        type: "spring",
        bounce: 0,
      }}
    >
      <motion.div
        animate={{
          width: bounds.width,
          height: bounds.height,
        }}
        style={{
          borderRadius: "20px",
          background: "black",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          color: "#d9d9d9",
          gap: 10,
          padding: "6px 12px",
          overflow: "hidden",
          originX: 0,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={ref} style={{ display: "flex", flexDirection: "column" }}>
          <motion.div
            layout="position"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              height: 40,
            }}
          >
            <motion.div
              animate={{
                color: isInCall ? "#00FF00" : "#d9d9d9",
                fill: isInCall ? "#00FF00" : "#00000",
              }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Phone
                style={{
                  width: 20,
                  height: 20,
                  color: "inherit",
                  fill: "inherit",
                }}
              />
            </motion.div>
            <AnimatePresence mode="popLayout" initial={false}>
              {!isPadOpen && !isHovering && !isInCall && (
                <motion.div
                  initial={{ opacity: 0, x: -50, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -50, filter: "blur(6px)" }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ArrowUpRight style={{ width: 20, height: 20 }} />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              {!isInCall && isHovering && (
                <motion.div
                  initial={{
                    filter: "blur(6px)",
                  }}
                  animate={{
                    filter: "blur(0px)",
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "135px",
                  }}
                >
                  <AnimatePresence mode="popLayout">
                    {!isHistoryOpen && (
                      <motion.div
                        key={"call-button"}
                        layoutId="call-button"
                        exit={{ opacity: 0, filter: "blur(6px)" }}
                        whileHover={{ background: "#9d9d9d66" }}
                        onClick={() => setIsPadOpen((prev) => !prev)}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "10px",
                          background: "#0000",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 10,
                        }}
                      >
                        <div>Call</div>
                        {isPadOpen && (
                          <X
                            style={{ width: 20, height: 20, paddingBottom: 1 }}
                          />
                        )}
                      </motion.div>
                    )}

                    {!isPadOpen && (
                      <motion.div
                        key={"history-button"}
                        layoutId="history-button"
                        whileHover={{ background: "#9d9d9d66" }}
                        exit={{ opacity: 0, y: 100, filter: "blur(6px)" }}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "10px",
                          background: "#0000",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 10,
                        }}
                        onClick={() => setIsHistoryOpen((prev) => !prev)}
                      >
                        <motion.div layoutId="history-button-text">
                          History
                        </motion.div>
                        {isHistoryOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: 25,
                              filter: "blur(6px)",
                            }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: 25, filter: "blur(6px)" }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              height: 20,
                            }}
                          >
                            <X
                              style={{
                                width: 20,
                                height: 20,
                                paddingBottom: 1,
                              }}
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              {isInCall && (
                <motion.div
                  key={"incall"}
                  initial={{ opacity: 0, x: -100, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -100, filter: "blur(6px)" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "max-content",
                  }}
                >
                  <AudioBars />
                  <span
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    {phoneNumber}
                  </span>
                  <PhoneOffIcon
                    style={{
                      width: 20,
                      height: 20,
                      color: "#FF9999",
                      marginTop: "1px",
                    }}
                    onClick={() => {
                      setIsInCall(false);
                      setPhoneNumber("");
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <AnimatePresence mode="popLayout">
            {isPadOpen && isHovering && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -100,
                  filter: "blur(6px)",
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -100, filter: "blur(6px)" }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  bounce: 0,
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  width: "100%",
                  padding: "6px 0",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    ref={inputRef}
                    autoFocus
                    type="text"
                    placeholder="Enter a number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      color: "#d9d9d9",
                      fontSize: 16,
                      fontWeight: 600,
                      width: "100%",
                    }}
                  />
                  <Delete
                    style={{ width: 20, height: 20, cursor: "pointer" }}
                    onClick={() => {
                      setPhoneNumber("");
                      inputRef.current?.focus();
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <PadNumber handleNumberClick={handleNumberClick} number="1" />
                  <PadNumber handleNumberClick={handleNumberClick} number="2" />
                  <PadNumber handleNumberClick={handleNumberClick} number="3" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <PadNumber handleNumberClick={handleNumberClick} number="4" />
                  <PadNumber handleNumberClick={handleNumberClick} number="5" />
                  <PadNumber handleNumberClick={handleNumberClick} number="6" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <PadNumber handleNumberClick={handleNumberClick} number="7" />
                  <PadNumber handleNumberClick={handleNumberClick} number="8" />
                  <PadNumber handleNumberClick={handleNumberClick} number="9" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <PadNumber handleNumberClick={handleNumberClick} number="*" />
                  <PadNumber handleNumberClick={handleNumberClick} number="0" />
                  <PadNumber handleNumberClick={handleNumberClick} number="#" />
                </div>
                <div
                  style={{
                    background: "#2288ff",
                    padding: "6px 0",
                    borderRadius: "12px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    if (phoneNumber.length === 0) return;
                    setIsPadOpen(false);
                    setIsInCall((prev) => !prev);
                  }}
                >
                  <span>Call</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            {isHistoryOpen && isHovering && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -100,
                  filter: "blur(6px)",
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -100, filter: "blur(6px)" }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  bounce: 0,
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  width: "100%",
                  padding: "6px 0",
                }}
              >
                <motion.div
                  whileHover={{ background: "#9d9d9d66" }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 16,
                    padding: "6px 10px",
                    borderRadius: "10px",
                    background: "#0000",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsHistoryOpen(false);
                    setPhoneNumber("John Doe");
                    setIsInCall(true);
                  }}
                >
                  <span>John Doe</span>
                  <PhoneOutgoing style={{ width: 20, height: 20 }} />
                </motion.div>
                <motion.div
                  whileHover={{ background: "#9d9d9d66" }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 16,
                    padding: "6px 10px",
                    borderRadius: "10px",
                    background: "#0000",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsHistoryOpen(false);
                    setPhoneNumber("Jane Taylor");
                    setIsInCall(true);
                  }}
                >
                  <span>Jane Taylor </span>
                  <PhoneOutgoing style={{ width: 20, height: 20 }} />
                </motion.div>
                <motion.div
                  whileHover={{ background: "#9d9d9d66" }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 16,
                    padding: "6px 10px",
                    borderRadius: "10px",
                    background: "#0000",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsHistoryOpen(false);
                    setPhoneNumber("678 901 234");
                    setIsInCall(true);
                  }}
                >
                  <span>678 901 234</span>
                  <PhoneOutgoing style={{ width: 20, height: 20 }} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </MotionConfig>
  );
}

export default CTI;
