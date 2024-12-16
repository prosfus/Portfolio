export function OSCARText() {
  return (
    <>
      <h2>OSCAR Dashboard 🚢 </h2>

      <p>
        <b>Designed, developed</b> and <b>shipped</b> the new frontend for OSCAR
        project.
      </p>
      <p>
        It is an open-source platform that enables the creation of parallel,
        event-driven, serverless data-processing applications running on custom
        containerized environments.
      </p>
      <p>This platform is currently being used by multiple EU projects.</p>
      <p>
        <b>Source code: </b>
        <a href={"https://github.com/grycap/oscar-dashboard"} target="_blank">
          OSCAR Dashboard
        </a>
      </p>
      <h2>Technology stack:</h2>
      <ul>
        <li>
          <b>Shadcn</b> for the UI components
        </li>
        <li>
          <b>Monaco</b> to edit and visualize code
        </li>
        <li>
          <b>AWS SDK</b> to interact with S3 buckets
        </li>
      </ul>
    </>
  );
}
