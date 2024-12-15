import { useItemContext } from "@/context/useItemContext";
import EmailItem from "./components/EmailItem";
import { ProyectItem } from "@/models/ProyectItem";

function Email() {
  const { itemHovered, itemSelected } = useItemContext();
  const auto =
    itemHovered === ProyectItem.EMAIL && itemSelected !== ProyectItem.EMAIL;
  return <EmailItem auto={auto} />;
}

export default Email;
