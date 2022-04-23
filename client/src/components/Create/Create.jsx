import React from 'react'
import { Link } from 'react-router-dom'

export default function Create() {
    return (
        <div className='flex'>
            <div className='w-1/2 h-100 text-center'><Link to="/create/nft">NFT</Link></div>
            <div className='w-1/2 h-100 text-center'><Link to="/create/collection">Collection</Link></div>
        </div>
    )
}
