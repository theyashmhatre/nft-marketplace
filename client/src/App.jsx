import { useState } from 'react'
import {Navbar, Welcome, Services, Footer, Transactions, Section} from'./components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Singlenft from './components/Singlenft';
import Singlecollection from './components/Singlecollection';
import CreateNFT from './components/CreateNFT/CreateNFT';
import ProfileSection from './components/ProfileSection/profileSection';

const App = () => {

  return (
    
      <Router>
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
              <Navbar />
            </div>
            <Routes>
                  <Route path='/' element={<Home />} />
                  <Route exact path='/create' element={<CreateNFT />} />
                  <Route exact path ='/Singlenft' element={<Singlenft/>} />
                  <Route exact path ='/Profile' element={<ProfileSection/>} />
                  <Route exact path='/Singlecollection' element={< Singlecollection/>} />
             </Routes>
            <Footer />
        </div>
      </Router>
  )
}

export default App
