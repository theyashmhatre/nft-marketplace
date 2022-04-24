import { useState } from 'react'
import { Navbar, Welcome, Services, Footer, Transactions, Section } from './components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Singlenft from './components/Singlenft';
import Singlecollection from './components/SingleCollection';
import CreateNFT from './components/Create/CreateNFT/CreateNFT';
import ProfileSection from './components/ProfileSection/profileSection';
import Create from './components/Create/Create';
import CreateCollection from './components/Create/CreateCollection/CreateCollection';
import CreateUser from './components/Create/CreateUser/CreateUser';
import { WalletProvider } from './context/WalletContext';
import { MarketplaceProvider } from './context/MarketplaceContext';

const App = () => {

  return (

    <Router>
      <WalletProvider>
        <MarketplaceProvider>
          <div className="min-h-screen">
            <div className="gradient-bg-welcome">
              <Navbar />
            </div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route exact path='/create' element={<Create />} />
              <Route exact path='/create/nft' element={<CreateNFT />} />
              <Route exact path='/create/collection' element={<CreateCollection />} />
              <Route exact path='/create/user' element={<CreateUser />} />
              <Route exact path='/assets/:nftId' element={<Singlenft />} />
              <Route exact path='/Profile' element={<ProfileSection />} />
              <Route exact path='/collection/:collectionId' element={< Singlecollection />} />
            </Routes>
            <Footer />
          </div>
        </MarketplaceProvider>
      </WalletProvider>
    </Router>
  )
}

export default App
