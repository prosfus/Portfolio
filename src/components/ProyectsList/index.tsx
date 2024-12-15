import ProyectCard from "@/components/ProyectsList/components/ProyectCard";
import DialappletLogo from "../../assets/dialapplet.webp";
import OSCARLogo from "../../assets/oscar.png";
import { ProyectsListContainer } from "./components/ProyectsListContainer";
import { ProyectSection } from "./components/ProyectSection";
import { ProyectItem } from "@/models/ProyectItem";

export function ProyectsList() {
  return (
    <ProyectsListContainer>
      <ProyectSection logo={DialappletLogo} color="#385cc7">
        <ProyectCard id={ProyectItem.CTI} number="00" name="CTI" />
        <ProyectCard id={ProyectItem.EMAIL} number="01" name="EMAIL" />
        <ProyectCard id={ProyectItem.DASHBOARD} number="02" name="DASHBOARD" />
      </ProyectSection>
      <ProyectSection logo={OSCARLogo} color="#009688">
        <ProyectCard id={ProyectItem.OSCAR} number="03" name="OSCAR" />
      </ProyectSection>
    </ProyectsListContainer>
  );
}
