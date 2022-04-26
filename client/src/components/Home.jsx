import React, { useContext } from 'react'
import Footer from './Footer'
import Services from './Services'
import Transactions from './Transactions'
import Welcome from './Welcome'
import NftSection from './Section'
import { MarketplaceContext } from '../context/MarketplaceContext';

export default function Home() {

  const {allCollections, fetchNFTs} = useContext(MarketplaceContext);

  return (
    <div>
        <div className="gradient-bg-welcome">
              <Welcome />
        </div>
        <Services />
        <Transactions />
        <NftSection 
            allCollections = {allCollections}
            allnfts={fetchNFTs}
        />
        
    </div>
  )
}
