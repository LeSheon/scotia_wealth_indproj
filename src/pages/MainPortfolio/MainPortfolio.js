import "./mainportfolio.scss";
import starIcon from "../../assets/icons/carbon_star-review.svg";
import threeDot from "../../assets/icons/dot-button-2.svg";
import circleDiagram from "../../assets/images/Circle_Diagram.png";
import stockGraph from "../../assets/images/stock-graph.png";
import stockState from "../../assets/images/stock-list-state.png";
import starbucksIcon from "../../assets/icons/simple-icons_starbucks.svg";
import appleIcon from "../../assets/icons/apple-icon.svg";
import overView from "../../assets/images/overview-diagram.png";
import { useNavigate } from "react-router-dom";

export default function MainPortfolio() {

    const navigate = useNavigate();

    return (
        <section className="main-portfolio">
            <h1 className="main-portfolio__advisor-name">HENRY CHANDLER</h1>
            <div className="main-portfolio__advisor-button-container">
                <button onClick={() => navigate('/assessment')} className="main-portfolio__advisor-button">
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
                            <img className="main-portfolio__stock-list-item-icon" src={starbucksIcon} alt=""/>
                            <div className="main-portfolio__list-item-container">
                                <div className="main-portfolio__list-text-container">
                                    <h4 className="main-portfolio__list-title">SBUX</h4>
                                    <span className="main-portfolio__list-text">O5 units</span>
                                </div>
                                <div className="main-portfolio__list-text-container">
                                    <img className="main-portfolio__stock-state" src={stockState} alt=""/>
                                </div>
                            </div>
                        </li>
                        <li className="main-portfolio__stock-list-item">
                            <img className="main-portfolio__stock-list-item-icon" src={appleIcon} alt=""/>
                            <div className="main-portfolio__list-item-container">
                                <div className="main-portfolio__list-text-container">
                                    <h4 className="main-portfolio__list-title">AAPL</h4>
                                    <span className="main-portfolio__list-text">O5 units</span>
                                </div>
                                <div className="main-portfolio__list-text-container">
                                    <img className="main-portfolio__stock-state" src={stockState} alt=""/>
                                </div>
                            </div>
                        </li>
                        <li className="main-portfolio__stock-list-item">
                            <div className="main-portfolio__stock-list-item-icon" src="" alt=""/>
                            <div className="main-portfolio__list-item-container">
                                <div className="main-portfolio__list-text-container">
                                    <h4 className="main-portfolio__list-title">BITCOIN</h4>
                                    <span className="main-portfolio__list-text">O.34534 BTC</span>
                                </div>
                                <div className="main-portfolio__list-text-container">
                                    <img className="main-portfolio__stock-state" src={stockState} alt=""/>
                                </div>
                            </div>
                        </li>
                        <li className="main-portfolio__stock-list-item">
                            <div className="main-portfolio__stock-list-item-icon" src="" alt=""/>
                            <div className="main-portfolio__list-item-container">
                                <div className="main-portfolio__list-text-container">
                                    <h4 className="main-portfolio__list-title">QQQ</h4>
                                    <span className="main-portfolio__list-text">O7 units</span>
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

                <div className="main-portfolio__stock-chart">
                    <img className="main-portfolio__overview-diagram" src={overView} alt=""/>
                    <button onClick={() => navigate('/add')} className="main-portfolio__overview-button">Add An Investment</button>
                </div>
            </div>
        </section>
    );
}