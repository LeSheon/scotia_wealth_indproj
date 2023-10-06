import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<DashBoard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
