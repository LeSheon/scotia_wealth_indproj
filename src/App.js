import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard';
import AddInvestment from './pages/AddInvestment/AddInvestment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<DashBoard />}/>
          
          <Route path={`/add`} element={<AddInvestment />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
