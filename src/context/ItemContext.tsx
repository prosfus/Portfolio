import { ProyectItem } from "@/models/ProyectItem";
import { createContext, useState } from "react";

interface ItemContextProps {
  itemHovered?: ProyectItem;
  itemSelected?: ProyectItem;
  setItemHovered: (item?: ProyectItem) => void;
  setItemSelected: (item?: ProyectItem) => void;
}

const ItemContext = createContext({} as ItemContextProps);

export function ItemContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [itemHovered, setItemHovered] = useState<ProyectItem>();
  const [itemSelected, setItemSelected] = useState<ProyectItem>();

  return (
    <ItemContext.Provider
      value={{ itemHovered, itemSelected, setItemHovered, setItemSelected }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContext;
