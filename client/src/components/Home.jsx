import React from 'react'
import Footer from './Footer'
import Services from './Services'
import Transactions from './Transactions'
import Welcome from './Welcome'

export default function Home() {
  return (
    <div>
        <div className="gradient-bg-welcome">
              <Welcome />
        </div>
        <Services />
        <Transactions />
        
    </div>
  )
}
