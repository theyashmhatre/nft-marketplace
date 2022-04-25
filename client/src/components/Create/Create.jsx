import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Create() {
    return (
        <div className='flex justify-around py-[100px] px-[20%] min-h-[700px] bg-[#121212]'>
            <Link to="/create/nft"><button type="button"  className="lomMVY">NFT</button></Link>
            <Link to="/create/nft"><button type="button"  className="lomMVY">Collection</button></Link>
            {/* <div className={classNames(
                'w-1/2 my-[10%] h-100 text-center',
                ''
            )}></div>
            <div className='w-1/2 h-100 text-center'><Link to="/create/collection">Collection</Link></div> */}
        </div>
    )
}
