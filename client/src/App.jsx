import { useState } from 'react'
import {Navbar, Welcome, Services, Footer, Transactions} from'./components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateNFT from './components/CreateNFT/CreateNFT';

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
              </Routes>

            <Footer />
        </div>
      </Router>
  )
}

export default App
