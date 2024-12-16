export function CTIText() {
  return (
    <>
      <h2>My First Major Component 🚀</h2>
      <p>
        A floating bar designed to let users <b>start</b>, <b>park</b>, and{" "}
        <b>transfer</b> calls at any time.
      </p>
      <p>
        Over time, this component evolved to support <b>multiple channels</b>,
        such as:
        <ul>
          <li>
            <b>Email</b>
          </li>
          <li>
            <b>Telegram</b>
          </li>
          <li>
            <b>WhatsApp</b>
          </li>
          <li>
            <b>Other chat channels</b>
          </li>
        </ul>
      </p>
      <p
        style={{
          fontStyle: "italic",
        }}
      >
        <i>Note: </i> For these channels, this component allows users to send
        only the first message. A dedicated view is available for managing
        ongoing conversations.
      </p>
      <h2>Technology Stack:</h2>
      <ul>
        <li>
          <b>WebRTC</b> for real-time communications
        </li>
        <li>
          <b>JsSIP</b> as the foundation for VoIP
        </li>
        <li>
          <b>Framer Motion</b> for smooth and dynamic animations
        </li>
      </ul>
    </>
  );
}
