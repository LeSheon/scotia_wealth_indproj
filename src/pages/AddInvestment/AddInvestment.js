import "./addinvestment.scss";
import { Link } from "react-router-dom"
import BackButton from "../../assets/icons/mdi_chevron-left.svg";
import SettingsButton from "../../assets/icons/ic_sharp-settings.svg";
import DownButton from "../../assets/icons/mdi_chevron-down.svg";

const AddInvestment = () => {

    return (
        <section className="investment">
        <div className="investment__upper-buttons">
            <div className="investment__back-button">
                <Link to={`/`}>
                    <img src={BackButton} alt="back button"/>
                    <span>Back to Dashboard</span>
                </Link>
            </div>
            <div>
                <img src={SettingsButton} alt="settings button"/>
                <img src={DownButton} alt="down button"/>
            </div>
        </div>

        <div className="investment__form-container">
            <h2 className="investment__form-header">Investment Details</h2>

            <form className="investment__form">
                <div className="investment__form--top">
                    <label className="investment__form-label">Investment Amount</label>
                    <input className="investment__form-input" id="investmentAmount"></input>

                    <label className="investment__form-label">Industry</label>
                    <input className="investment__form-input" id="industry"></input>
                </div>
                <button className="button button__save" type="submit">Save Changes</button>
                <button className="button button__cancel" type="reset">Cancel</button>
            </form>
        </div>
        </section>
    )

}

export default AddInvestment;