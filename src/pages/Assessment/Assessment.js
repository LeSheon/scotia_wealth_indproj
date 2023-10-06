import "./assessment.scss";
import skyMan from "../../assets/icons/Skydiving.svg";
import stockInfo from "../../assets/images/stock-info-image.png";
import percentBar from "../../assets/icons/percentage-bar.svg";

export default function Assessment() {
    return (
        <section className="assessment">
            <h1 className="assessment__title">Your Assessment</h1>
            <div className="assessment__image-container">
                <img className="assessment__image" src={skyMan} alt=""/>
            </div>

            <div className="assessment__info-container">
                <h2 className="assessment__text">You are a <span className="assessment__text--red">Risk-Taker:</span></h2>
                <ul className="assessment__list">
                    <li className="assessment__list-item">
                        <p className="assessment__list-text"><span className="assessment__list-text--bold">Strategy:</span> Seeks high-risk, high-reward opportunities.</p>
                    </li>
                    <li className="assessment__list-item">
                        <p className="assessment__list-text"><span className="assessment__list-text--bold">Characteristics:</span> Comfortable with volatility, enjoys speculative investments like cryptocurrencies or starups.</p>
                    </li>
                    <li className="assessment__list-item">
                        <p className="assessment__list-text"><span className="assessment__list-text--bold">Motivation:</span> The potential for significant capital gains and the excitement of risk.</p>
                    </li>
                </ul>
            </div>
            <div className="assessment__info-container">
                <h2 className="assessment__text">Your current trends:</h2>
                <ul className="assessment__list">
                    <li className="assessment__list-item">
                        <p className="assessment__list-text">You have put <span className="assessment__list-text--brown">over 78%</span> of your current investments into highly-volatile stocks.</p>
                    </li>
                    <img className="assessment__list-stock-info" src={stockInfo} alt="" />
                    <li className="assessment__list-item">
                        <p className="assessment__list-text">Your risk assessment is <span className="assessment__list-text--brown">20% higher</span> in the past 3 weeks.</p>
                    </li>
                    <img className="assessment__list-percent-bar" src={percentBar} alt="" />
                </ul>
            </div>

            <div className="assessment__info-container">
                <h2 className="assessment__text assessment__text--long">Here's how an advisor can help</h2>
                <ul className="assessment__list">
                    <li className="assessment__list-item">
                        <p className="assessment__list-text">Strategize diversification so losses can be mitigated when taking risks</p>
                    </li>
                    <li className="assessment__list-item">
                        <p className="assessment__list-text">Explore market research for more stable companies that align with your values</p>
                    </li>
                    <li className="assessment__list-item">
                        <p className="assessment__list-text">Connect you with a network of experts related to your investment goals </p>
                    </li>
                </ul>
            </div>
            <div className="assessment__footer">
                <h2 className="assessment__footer-title">Book your meeting today</h2>
                <button className="assessment__footer-button">Talk to An Advisor</button>
            </div>
        </section>
    );
}