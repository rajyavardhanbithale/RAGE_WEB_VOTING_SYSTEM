import React from "react"



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Signup from "./Component/Signup";
import Profile from "./Component/Profile";
import Pricing from "./Component/Pricing";
import Votingpage from "./Component/Votingpage"
import Login from './Component/Login';


import Header from './Component/home/Header';
import About from './Component/home/About';
import Benificial from './Component/home/Benificial';
import Freetrail from './Component/home/Freetrail';

import Footer from './Component/home/footer';

import Navbar from "./Component/home/Navbar";
import Logout from "./Component/Logout";
import Formelection from "./Component/Formelection";
import { useLocation } from 'react-router-dom';
import Dashboard from "./Component/Dashboard";
import Feature from "./Component/home/assets/Feature";
import Conform from './Component/Conform'
import Checkout from  './Component/Checkout'


function App() {
  const pathname = window.location.pathname;



    return (
      <>

        <Router>
          <div className="App">
            <Routes>
              <Route exact path='/login' element={< Login />}></Route>
              <Route exact path='/logout' element={< Logout />}></Route>
              <Route exact path='/signup' element={< Signup />}></Route>
              <Route exact path='/profile' element={< Profile />}></Route>
              <Route exact path='/pricing' element={< Pricing />}></Route>
              <Route exact path='/voting' element={< Votingpage />}></Route>
              <Route exact path='/organize' element={< Formelection />}></Route>
              <Route exact path='/dashboard' element={< Dashboard />}></Route>
              <Route exact path='/feature' element={< Feature />}></Route>
              <Route exact path='/confirm' element={< Conform />}></Route>
              <Route exact path='/checkout' element={< Checkout />}></Route>

            </Routes>

            <Navbar sticky="top" ></Navbar>
            <br />

          </div>
        </Router>

        {pathname === '/' && (
          <div>
            <Header></Header>
            <br /><br />
            <About></About>
            <Benificial></Benificial>
            <Freetrail></Freetrail>
            <Footer></Footer>
          </div>
        )}



        






      </>
    )
}

export default App
