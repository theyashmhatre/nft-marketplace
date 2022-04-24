import classNames from 'classnames';
import React, { useContext, useState } from 'react'
import { WalletContext } from '../../context/WalletContext';
import { shortenAddress } from '../../utils/shortnerAddress';

export default function ProfileSection() {
  const { connectWallet, currentAccount } = useContext(WalletContext);
  const [onSale, setOnSale] = useState(true);
  const [owned, setOwned] = useState(false);
  const [collection, setCollection] = useState(false);
  return (
    <div className='gradient-bg-welcome'>
      <div className={classNames(
        "pt-[100px] pb-[200px] px-[20%]",
      )}>
        <div className='max-w-[1500px] mx-auto rounded-[20px] w-[100%] h-[260px] bg-[#191919]'>
          <div className={classNames(
            "pt-[180px] flex justify-center align-bottom"
          )}>
            <img className={classNames(
              "rounded-[50%]  border-2 border-black"
            )} src="/images/bg.svg" alt="" />
          </div>
        </div>
        <div className={classNames(
            'text-gray-400 text-[14px] font-bold mt-[2.5rem] py-1',
            'bg-[#191919] mx-auto rounded-[20px] px-4 max-w-[370px]'
          )}>
            {currentAccount}
          </div>
        <div className='mt-[30px]'>
          <div className={classNames(
            'flex justify-center'
          )}>
            <div className={classNames(
              'hover:cursor-pointer',
              'text-[16px] mx-3 font-semibold',
              onSale ? 'text-white': 'text-gray-500'
            )} onClick={()=>{
              setOnSale(!onSale);
              setCollection(false);
              setOwned(false);
            }} >On sale</div>
            <div className={classNames(
              'hover:cursor-pointer',
              'text-[16px] mx-3 font-semibold',
              owned ? 'text-white': 'text-gray-500'
            )} onClick={()=>{
              setOwned(!owned);
              setCollection(false);
              setOnSale(false);
            }}>Owned</div>
            <div className={classNames(
              'hover:cursor-pointer',
              'text-[16px] mx-3 font-semibold',
              collection ? 'text-white': 'text-gray-500'
            )} onClick={()=>{
              setCollection(!collection);
              setOnSale(false);
              setOwned(false);
            }}>Collection</div>
          </div>
        <div className=' w-full h-[0.25px] bg-gray-600 mt-5' />
        </div>
      </div>
    </div>
  )
}
