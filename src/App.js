import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard';
import MainPortfolio from './pages/MainPortfolio/MainPortfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<DashBoard />}/>
          <Route path={'main-portfolio'} element={<MainPortfolio />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
