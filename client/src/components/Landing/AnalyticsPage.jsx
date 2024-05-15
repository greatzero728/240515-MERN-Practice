import "./AnalyticsPage.css";

export default function AnalyticsPage() {
  return (
    <div className="AnalyticsPage">
      <div className="AnalyticsPage_Title">
        <h2>Analytics Page</h2>
      </div>
      <div className="AnalyticsPage_Body">
        <div className="AnalyticsPage_Body_Left">
          <h3>Analytics Page Left</h3>
          <p>This is the content for the left section of the Analytics Page.</p>
        </div>
        <div className="AnalyticsPage_Body_Right">
          <h3>Analytics Page Right</h3>
          <p>
            This is the content for the right section of the Analytics Page.
          </p>
        </div>
      </div>
    </div>
  );
}
