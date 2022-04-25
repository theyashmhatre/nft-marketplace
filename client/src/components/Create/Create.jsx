import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Create() {
    return (
        <div className='flex py-[100px] min-h-[700px]'>
            <div className={classNames(
                'w-1/2 my-[10%] h-100 text-center',
                ''
                )}><Link to="/create/nft">NFT</Link></div>
            <div className='w-1/2 h-100 text-center'><Link to="/create/collection">Collection</Link></div>
        </div>
    )
}
