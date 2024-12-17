export function OSCARText() {
  return (
    <>
      <h2>OSCAR Dashboard 🚢 </h2>

      <p>
        <b>Designed, developed</b> and <b>shipped</b> the new frontend for OSCAR
        project.
      </p>
      <p>
        It is an open-source platform that enables the creation of{" "}
        <b>parallel</b>, event-driven, <b>serverless</b> <b>data-processing</b>{" "}
        applications running on custom containerized environments.
      </p>
      <p>
        Is expected to be used by multiple <b>EU projects</b> in 2025 Q1.
      </p>
      <p>
        <b>Deployment: </b>
        <a href={"https://dashboard.oscar.grycap.net/"} target="_blank">
          OSCAR Dashboard
        </a>
      </p>
      <p>
        <b>Source code: </b>
        <a href={"https://github.com/grycap/oscar-dashboard"} target="_blank">
          Github Repo
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
