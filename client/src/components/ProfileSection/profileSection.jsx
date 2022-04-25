import classNames from 'classnames';
import React, { useContext, useState, useEffect } from 'react'
import { MarketplaceContext } from '../../context/MarketplaceContext';
import { WalletContext } from '../../context/WalletContext';
import { shortenAddress } from '../../utils/shortnerAddress';
import Card from '../Card';

export default function ProfileSection() {
  const { connectWallet, currentAccount } = useContext(WalletContext);
  const [onSale, setOnSale] = useState(true);
  const [owned, setOwned] = useState(false);
  const [collection, setCollection] = useState(false);
  const [bought, setBought] = useState(false);
  const { fetchNFTs } = useContext(MarketplaceContext);
  const [nftList, setNftList] = useState([]);
  useEffect(async () => {
    fetchNft();
  }, [])

  const fetchNft = async () => {
    const nfts = await fetchNFTs();
    setNftList(nfts);
  }

  const fetchOwned = async () => {
    const i = nftList;

  }

  const NoItems = () => {
    return (
      <>
        <div className="flex flex-col py-[60px]">
          <div className={classNames(
            "flex flex-col text-white",
            'max-w-[360px] mx-auto text-center',
          )}>
            <span className={classNames(
              'font-bold text-[26px]'
            )}>No items found</span>
            <span className={classNames(
              'text-[#828282] text-[18px] mt-1'
            )}>Come back soon! Or try to browse something for you on our marketplace</span>
            <div className="mt-[16px]">
              <a href="" className="">
                <button type="button" className="bNwIlU mx-auto">
                  Browse marketplace
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

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
        <p className={classNames(
          'text-gray-400 text-[14px] font-bold mt-[2.5rem] py-1',
          'bg-[#191919] mx-auto rounded-[20px] px-4 max-w-[370px]'
        )}>
          {currentAccount}
        </p>
        <div className='mt-[30px]'>
          <div className={classNames(
            'flex justify-center'
          )}>
            <div className={classNames(
              'hover:cursor-pointer ',
              'text-[16px] mx-3 font-semibold',
              onSale ? 'text-white' : 'text-gray-500 nLPsul'
            )} onClick={() => {
              if (onSale === false) {
                setOnSale(!onSale);
                setCollection(false);
                setOwned(false);
                setBought(false);
              }
            }} >On sale</div>
            <div className={classNames(
              'hover:cursor-pointer ',
              'text-[16px] mx-3 font-semibold',
              owned ? 'text-white' : 'text-gray-500 nLPsul'
            )} onClick={() => {
              if (owned === false) {
                setOwned(true);
                setCollection(false);
                setOnSale(false);
                setBought(false);
                fetchOwned();
              }
            }}>Owned</div>
            <div className={classNames(
              'hover:cursor-pointer ',
              'text-[16px] mx-3 font-semibold',
              bought ? 'text-white' : 'text-gray-500 nLPsul'
            )} onClick={() => {
              if (bought === false) {
                setCollection(false);
                setOnSale(false);
                setOwned(false);
                setBought(true);
              }
            }}>Bought Nfts</div>
            <button className={classNames(
              'hover:cursor-pointer ',
              'text-[16px] mx-3 font-semibold',
              collection ? 'text-white' : 'text-gray-500 nLPsul'
            )} onClick={() => {
              if (collection === false) {
                setCollection(!collection);
                setOnSale(false);
                setOwned(false);
                setBought(false);
              }
            }}>Collection</button>
          </div>
          <div className=' w-full h-[0.25px] bg-gray-600 mt-5 nLPsul' />
          <div className='mt-[40px] grid grid-cols-2 xl:grid-cols-3 gap-4'>
            {nftList ? <>
            {
              nftList.map((nft,index)=>{
                if (onSale && nft.isListed && nft.owner === currentAccount) {
                  console.log(nft.isListed);
                    return <div key={index}><Card props={nft} /></div>;
                } else if(owned && nft.owner === currentAccount){
                  return <div key={index}><Card props={nft} /></div>;
                } 
                return 
              })
            }</> : <NoItems />}
          </div>
        </div>
      </div>
    </div>
  )
}
