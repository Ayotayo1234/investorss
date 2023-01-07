import {  Route, Routes } from 'react-router-dom'

import './App.css';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div className="App">
        <Routes>
           <Route path='/' element={<LoginSignup/>}/>
           {/* <Route path='/home' element={<Home/>}/> */}
           {/* <Route path='/test' element={<Test/>}/> */}
           {/* <Route path='/payment' element={<Payment/>}/> */}
           {/* <Route path='/profile' element={<Profile/>}/> */}
           {/* <Route path='/admin' element={<Admin/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
