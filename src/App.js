import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import Header from "./components/Header/Header";
import MainPortfolio from './pages/MainPortfolio/MainPortfolio';
import AddInvestment from './pages/AddInvestment/AddInvestment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<DashBoard />} />
          <Route path={'main-portfolio'} element={<MainPortfolio />}/>
          <Route path={"/add"} element={<AddInvestment />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
