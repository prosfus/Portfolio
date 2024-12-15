import { useContext } from "react";
import ItemContext from "./ItemContext";

export function useItemContext() {
  const context = useContext(ItemContext);

  return context;
}
