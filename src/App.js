import './App.css';
import Home from './pages/Home';
// import Test from './pages/Test';
import {  Route, Routes } from 'react-router-dom'
import LoginSignup from './pages/LoginSignup'
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
// import Pdf from './components/Pdf';

function App() {
  return (
    <div className="App">
      {/* <Pdf/> */}
      <Routes>
           <Route path='/' element={<LoginSignup/>}/>
           <Route path='/home' element={<Home/>}/>
           {/* <Route path='/test' element={<Test/>}/> */}
           <Route path='/payment' element={<Payment/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/admin' element={<Admin/>}/>
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
