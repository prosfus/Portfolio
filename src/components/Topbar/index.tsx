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
      <div>Pau Rostoll Fuset</div>
      <div>CV</div>
      <div>
        <a
          href="https://www.linkedin.com/in/prosfus13/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div>
        <a
          href="https://github.com/prosfus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}
