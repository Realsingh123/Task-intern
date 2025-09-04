import React from 'react'
import Home from './pages/Home';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
// import AccountSettings from './pages/Account'; 
import Account from './pages/Account';


function App() {
  return (
    <>
  {/* <Home></Home> */}
  {/* <Signup></Signup> */}
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Sigin' element={<Signin/>}></Route>
        <Route path='/Account' element={<Account/>}></Route>

      </Routes>
    </Router>
    </>
  )
}

export default App
