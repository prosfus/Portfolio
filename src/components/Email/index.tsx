import EmailItem from "./components/EmailItem";

function Email() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <EmailItem />
    </div>
  );
}

export default Email;
