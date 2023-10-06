import "./mainportfolio.scss";
import starIcon from "../../assets/icons/carbon_star-review.svg";
import threeDot from "../../assets/icons/3dot_button.svg";
import circleDiagram from "../../assets/images/Circle_Diagram.png";
import stockGraph from "../../assets/images/stock-graph.png";
import stockState from "../../assets/images/stock-list-state.png";

export default function MainPortfolio() {
    return (
        <section className="main-portfolio">
            <h1 className="main-portfolio__advisor-name">HENRY CHANDLER</h1>
            <div className="main-portfolio__advisor-button-container">
                <button className="main-portfolio__advisor-button">
                    <img className="main-portfolio__advisor-button-icon" src={starIcon} alt=""/>
                    Start An Assessment
                </button>
                <button className="main-portfolio__advisor-button main-portfolio__advisor-button--dot">
                    <img className="main-portfolio__dot-icon" src={threeDot} alt="More"/>
                </button>
            </div>
            <h2 className="main-portfolio__title">Main Portfolio</h2>
            <div className="main-portfolio__diagram-container">
                <img className="main-portfolio__diagram" src={circleDiagram} alt="Diagram"/>
                <div className="main-portfolio__diagram-info-container">
                    <div className="main-portfolio__invest-info">
                        <h4 className="main-portfolio__invest-title">Total Invested</h4>
                        <h3 className="main-portfolio__invest-text">$5258.30</h3>
                    </div>
                    <div className="main-portfolio__invest-info">
                        <h4 className="main-portfolio__invest-title">Total Gained</h4>
                        <h3 className="main-portfolio__invest-text">$613.40</h3>
                    </div>
                </div>
                <div className="main-portfolio__stock-chart">
                    <ul className="main-portfolio__stock-list">
                        <li className="main-portfolio__stock-list-item">
                            <img className="main-portfolio__stock-list-item-icon" src="" alt=""/>
                            <div className="main-portfolio__list-item-container">
                                <div className="main-portfolio__list-text-container">
                                    <h6 className="main-portfolio__list-title">SBUX</h6>
                                    <span className="main-portfolio__list-text">O5 units</span>
                                </div>
                                <div className="main-portfolio__list-text-container">
                                    <img className="main-portfolio__stock-state" src={stockState} alt=""/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="main-portfolio__stock-chart">
                    <img className="main-portfolio__stock-graph" src={stockGraph} alt=""/>
                </div>
            </div>
        </section>
    );
}