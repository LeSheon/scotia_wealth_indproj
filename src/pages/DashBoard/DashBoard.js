import { Link, Navigate } from "react-router-dom";
import "./dashboard.scss";
import moreIcon from "../../assets/icons/3dot_button_with_border.svg";
import bullseyeIcon from "../../assets/icons/Bullseye.svg";
import infoIcon from "../../assets/icons/i.svg";
export default function DashBoard() {
  return (
    <>
      <section className="dashboard">
        <h1 className="dashboard__title">Henry Chandler</h1>
        <div className="dashboard__container-first">
          <Link className="dashboard__button-connect">Talk to An Advisor</Link>
          <img src={moreIcon} className="dashboard__icon-more" />
        </div>
        <div className="dashboard__container-second">
          <h4 className="dashboard__container-second-title">
            Ways to Get Ahead
          </h4>
          <div className="dashboard__horizontal-scroll">
            <div className="dashboard__card">
              <div className="dashboard__card-top">
                <img src={bullseyeIcon} />
                <div className="dashboard__card-details">
                  <h5 className="dashboard__card-details--title">
                    Plan For Success
                  </h5>
                  <p className="dashboard__card-details--text">
                    Your portfolio helps you keep track of your goals and
                    investments.
                  </p>
                </div>
              </div>
              <Link className="dashboard__card-button">
                View Your Portfolio
              </Link>
            </div>
            <div className="dashboard__card">
              <div className="dashboard__card-top">
                <img src={bullseyeIcon} />
                <div className="dashboard__card-details">
                  <h5 className="dashboard__card-details--title">
                    Plan For Success
                  </h5>
                  <p className="dashboard__card-details--text">
                    Your portfolio helps you keep track of your goals and
                    investments.
                  </p>
                </div>
              </div>
              <Link className="dashboard__card-button">
                View Your Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div className="dashboard__nav">
          <Link className="dashboard__link">
            <span>&larr;</span>Back
          </Link>
          <p>1/4</p>
          <Link className="dashboard__link--active">
            Next <span>&rarr;</span>
          </Link>
        </div>
        <div className="dashboard__tabs">
          <div className="dashboard__tabs-holder--active">
            <p className="dashboard__tabs-text">Your Accounts</p>
          </div>
          <div className="dashboard__tabs-holder">
            <p className="dashboard__tabs-text">Your Goals</p>
          </div>
        </div>
        <div className="dashboard__info">
          <img src={infoIcon} />
          <p>
            Your current balance may take one business day to appear in Scotia
            Smart Investor, but you can view it now in the app or online
            banking.
          </p>
        </div>
      </section>
    </>
  );
}
