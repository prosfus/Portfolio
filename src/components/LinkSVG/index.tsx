import { useState } from "react";
import LinkSVG from "./linksvg";

interface Props {
  text: string;
  link: string;
}

export default function Link({ text }: Props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text}
      <LinkSVG isHover={isHover} />
    </div>
  );
}
