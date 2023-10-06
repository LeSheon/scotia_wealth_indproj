import "./dashboard.scss";
import scotiaIcon from "../../assets/icons/scotiabank-4.svg";
import NavBar from "../../components/NavBar/NavBar";

export default function DashBoard() {
    return (
        <main className="dashboard">
            <h1 className="dashboard__title">
                Scotia Smart Investor
            </h1>
            <div>
                <img className="dashboard__scotia-icon" src={scotiaIcon} alt=""/>
                Test Icon
            </div>
            <NavBar />
        </main>
    );
}
