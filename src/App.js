import logo from './logo.svg';
import './App.css';

import Addingqtys from './components/Addingqtys';
import Leftnavbar from './components/Leftnavbar';
import History from './components/History';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Settings from './components/Settings';
import Transactions from './components/Transactions';
import Advanced from './components/Advanced';
import ThisMonth from './components/ThisMonthhistory';

function App() {
  return (
    <div className="App">

      {/* <Addingqtys/> */}
      {/* <Leftnavbar/> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/thisMonthhistory" element={<ThisMonth />}></Route>
        <Route path="/Settings" element={<Settings />}></Route>
        <Route path='/transactions' element={<Transactions />}></Route>
        <Route path='/Advanced' element={<Advanced />}></Route>
      </Routes>
    </div>
  );
}

export default App;
