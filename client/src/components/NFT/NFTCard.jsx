import React, { useEffect, useState } from 'react'
import axios from "axios";
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';

export default function NFTCard({nft}) {
    console.log(nft);
    console.log(ethers.utils.formatEther(nft.price));

    const [NFTData, setNFTData] = useState();

    useEffect(() => {
      axios.get(nft.tokenURI).then((res) => {
          console.log(res);
          setNFTData(res.data);
      }).catch((err) => {
          console.log(err);
      });
    }, []);
    
  return (
      <div className="border-2 rounded-2xl mx-auto mb-6">
          <Link to={`/assets/${nft.tokenId}`}>
              {NFTData ? <div>
                  <img
                      className="rounded-full w-10 h-10 ml-3 mt-2 mb-2"
                      src={NFTData.image}
                  ></img>
                  <img
                      className="w-44 h-60 my-2 ml-8 rounded-lg"
                      src={NFTData.image}
                  ></img>
                  <div className="flex mt-8">
                      <h1 className="text-white mx-8">{`${NFTData.name} #${parseInt(nft.tokenId, 16)}`}</h1>
                      <img
                          className="mx-6 w-8 h-8"
                          src="https://rarible.com/9b703a21b9f93a1f0065.svg"
                      ></img>
                  </div>
                  <div>
                      <h1 className="text-gray-400 mx-7">{ethers.utils.formatEther(nft.price)} MATIC</h1>
                      <h1 className="text-blue-600 mx-7 mt-1 mb-2">Buy now</h1>
                  </div>
              </div> : <></>}
          </Link>
      </div>
  )
}
