import "./navbar.scss";
import scotiaNav from "../../assets/images/scotia_navbar.png";


export default function NavBar() {
    return (
        <div className="test-nav-bar">
            <img className="test-nav-bar__image" src={scotiaNav} alt=""/>
        </div>
    );
}