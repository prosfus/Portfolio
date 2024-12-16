export function DashboardsText() {
  return (
    <>
      <h2>Charts. 📈</h2>

      <p>
        Allows <b>real-time</b> visualization of information and KPIs related to
        calls and users using <b> various chart types</b> and{" "}
        <b> time ranges</b>.
      </p>
      <p>
        Panels are <b>dynamic</b>, enabling users to <b>move</b> and{" "}
        <b>resize</b> them to suit specific visualization needs.
      </p>

      <h2>Technology stack:</h2>
      <ul>
        <li>
          <b>Visx: </b> a collection of small primitives for data visualization
          made by Airbnb team
        </li>
        <li>
          <b>React Grid Layout: </b> for the responsive grid
        </li>
        <li>
          <b>Redux: </b> to store the data
        </li>
      </ul>
    </>
  );
}
