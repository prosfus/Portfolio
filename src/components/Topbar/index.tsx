export function TopBar() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        padding: "4rem 0 1rem 0",
      }}
    >
      {/*  <Link text="Pau Rostoll Fuset" link="https://www.google.com" /> */}
      <div>Pau Rostoll Fuset</div>
      <div>CV</div>
      <div>LinkedIn</div>
      <div>Github</div>
    </div>
  );
}
