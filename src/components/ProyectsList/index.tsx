import ProyectCard from "@/components/ProyectsList/components/ProyectCard";
import TruconlineLogo from "../../assets/logo_color.svg";
import DialappletLogo from "../../assets/dialapplet.webp";
import OSCARLogo from "../../assets/oscar.png";
import { ProyectsListContainer } from "./components/ProyectsListContainer";
import { ProyectSection } from "./components/ProyectSection";
import { ProyectItem } from "@/models/ProyectItem";

export function ProyectsList() {
  return (
    <ProyectsListContainer>
      <ProyectSection logo={TruconlineLogo} color="#eca760">
        <ProyectCard id={ProyectItem.TRUCONLINE} number="00" name="TRUC" />
      </ProyectSection>
      <ProyectSection logo={DialappletLogo} color="#385cc7">
        <ProyectCard id={ProyectItem.CTI} number="01" name="DIALER" />
        <ProyectCard id={ProyectItem.EMAIL} number="02" name="EMAIL" />
        <ProyectCard id={ProyectItem.DASHBOARD} number="03" name="DASHBOARD" />
      </ProyectSection>
      <ProyectSection logo={OSCARLogo} color="#009688">
        <ProyectCard id={ProyectItem.OSCAR} number="04" name="OSCAR" />
      </ProyectSection>
    </ProyectsListContainer>
  );
}
