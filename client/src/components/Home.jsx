import React from 'react'
import Footer from './Footer'
import Services from './Services'
import Transactions from './Transactions'
import Welcome from './Welcome'
import Section from './Section'

export default function Home() {
  return (
    <div>
        <div className="gradient-bg-welcome">
              <Welcome />
        </div>
        <Services />
        <Transactions />
        <Section />
        
    </div>
  )
}
