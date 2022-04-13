import classNames from 'classnames';
import React, { useContext } from 'react'
import { WalletContext } from '../../context/WalletContext';
import { shortenAddress } from '../../utils/shortnerAddress';

export default function ProfileSection() {
  const { connectWallet, currentAccount} = useContext(WalletContext);
  console.log(currentAccount);
  return (
    <div className='gradient-bg-welcome'>
      <div className={classNames(
        "py-[100px] px-[20%]",
      )}>
        <div className={classNames(
          "text-3xl font-bold sm:text-4xl text-white"
        )}> 
          User Profile
        </div>
        <div className={classNames("text-1xl")} style={{
              marginTop: "16px",
              color: "rgb(140, 140, 140)"
        }}>
        You can set preferred display name, create your branded profile URL and manage other personal settings  
        </div>
        <div className={classNames(
            "mt-[24px] "
        )}>
          <img className={classNames(
          "rounded-[50%]"
        )} src="/images/bg.svg" alt="" />
        </div>
        <div className={classNames("mt-[10px] ml-0",
        'text-2xl text-white')}>{shortenAddress(currentAccount)}</div>
      </div>
    </div>
  )
}
