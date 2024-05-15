import "./MainPage.css";
import RightArrow from "../../assets/RightArrow.png";
import Link1 from "../../assets/Link1.png";
import Link2 from "../../assets/Link2.png";
import Link3 from "../../assets/Link3.png";
import Link4 from "../../assets/Link4.png";

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage_Left">
        <div className="left-main-info-content-div">
          <div className="save-btn-div">
            <div className="save-btn">75% SAVE</div>
            <div className="black-weekend-div">
              For the Black Friday weekend
            </div>
          </div>
          <div className="main-title">
            <div>SOCIA's Token Decentralized</div>
            <div>Social Media Platform</div>
          </div>
          <div className="tiny-title">
            <div>Lorem ipsum dolor amet, consectetur adipiscing</div>
            <div>elit, sed do eiusmod tempor</div>
          </div>
          <div className="register-btn-div">
            <button className="register-btn">
              REGISTER & BUY TOKEN NOW
              <img src={RightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="MainPage_Right">
        <div className="right-info-content-div">
          <article className="right-info-title">Token sale End in</article>
          <article className="right-info-description">
            <label>Countdown is finished!</label>
            <label>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </label>
          </article>
          <div className="status-bar">
            <div className="current-status-bar">60,490</div>
          </div>
          <div className="status-title">
            <label>Soft cap</label>
            <label>CrowdSale</label>
            <label>Hard cap</label>
          </div>
          <div className="right-content-bottom-container">
            <div>
              <img src={Link1} alt="Link 1" />
            </div>
            <div>
              <img src={Link2} alt="Link 2" />
            </div>
            <div>
              <img src={Link3} alt="Link 3" />
            </div>
            <div>
              <img src={Link4} alt="Link 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
