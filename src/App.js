import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import SpecialOrders from './components/SpecialOrders';
import Home1 from './components/Home1';
import Promotion from './components/Promotion';
import Special from './components/Special';
import Dashboard from './components/Dashboard';
import Payment from './components/Payment';
import Pay from './components/Pay';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<><Navbar /><Home1 /></>} />
        <Route path="/Signup" element={<><Navbar /><Signup /></>} />
        <Route path="/Login" element={<><Navbar /><Login /></>} />
        <Route path="/dashboard" element={<><Navbar /><SpecialOrders/></>} />
        <Route path="/pro" element={<><Navbar /><Promotion/></>} />
        <Route path="/special" element={<><Navbar/><Special/></>} />
        <Route path="/order" element={<><Navbar/><SpecialOrders/></>} />
        <Route path="/payment" element={<><Navbar/><Payment/></>} />
        <Route path="/pay" element={<><Navbar/><Pay/></>} />
        
      </Routes>
    </div>
  );
}

export default App;
