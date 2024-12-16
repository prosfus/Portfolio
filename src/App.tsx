import { ProyectsList } from "./components/ProyectsList";
import { TopBar } from "./components/Topbar";
import MainArea from "./components/MainArea";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#d9d9d9",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          borderLeft: "1px solid #AEAEAE",
          margin: "0 2rem",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <TopBar />
        <MainArea />
        <ProyectsList />
      </div>
    </div>
  );
}

export default App;
