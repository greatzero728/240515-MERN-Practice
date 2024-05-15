import "./DetailPage.css";

export default function DetailPage() {
  return (
    <div className="DetailPage">
      <div className="DetailPage_Title">
        <div className="DetailPage_Title_Head">Title Head</div>
        <div className="DetailPage_Title_Body">Title Body</div>
      </div>
      <div className="DetailPage_Body">
        <div className="DetailPage_Body_Mobile">Mobile Content</div>
        <div className="DetailPage_Body_Investment">Investment Content</div>
        <div className="DetailPage_Body_Protect">Protect Content</div>
        <div className="DetailPage_Body_Security">Security Content</div>
      </div>
    </div>
  );
}
