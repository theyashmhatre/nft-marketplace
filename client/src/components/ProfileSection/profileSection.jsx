import React, { useContext } from 'react'
import { WalletContext } from '../../context/WalletContext';
import { shortenAddress } from '../../utils/shortnerAddress';

export default function ProfileSection() {
  const { connectWallet, currentAccount} = useContext(WalletContext);
  console.log(currentAccount);
  return (
    <div>
      {shortenAddress(currentAccount)}
      
    </div>
  )
}
