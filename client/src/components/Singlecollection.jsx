import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MarketplaceContext } from "../context/MarketplaceContext";
import NFTCard from "./NFT/NFTCard";

const SingleCollection = () => {

  const { collectionId } = useParams();
  const [collectionItems, setCollectionItems] = useState();
  const [collectionData, setCollectionData] = useState();
  const { getSingleCollection } = useContext(MarketplaceContext);

  useEffect(async () => {
    const data = await getSingleCollection(collectionId);
    console.log(data);
    setCollectionItems(data[0]);
    setCollectionData(data[1]);
  }, []);


  return (
    <div className="bg-black">
      {collectionData ? <div>
        <div className="mx-8">
          <div>
            <img
              className="rounded-xl h-96 align-middle m-auto w-1/2"
              src={collectionData.imageURL}
            ></img>
            <div>
              <h1 className="text-white font-bold text-3xl text-center mt-4">
                {collectionData.name}
              </h1>
              <div className="grid     grid-row-1 justify-center mt-2">
                <div>
                  <h1 className=" mt-1 text-blue-600  ">{`@worldof${collectionData.name.replace(/ /g, "")}`}</h1>
                </div>
                <div className=" flex border-2 border-gray-700 bg-gray-900 rounded-lg lg:mx-4  mt-4 ">
                  <img
                    className="w-6 h-6 mx-2 "
                    src="https://rarible.com/9b703a21b9f93a1f0065.svg"
                  ></img>
                  <h1 className="text-white  mr-1  ">0xf61f...d6dc</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-8 ">
          <div
            className="mt- 6  lg:text-white grid lg:grid-cols-6 lg:justify-center   lg:grid-rows-1 grid-cols-2 grid-rows-3
            "
          >
            <div className="border-2 rounded-2xl my-7 mx-7">
              <h1 className="text-gray-400 mx-4 my-4  text-center">
                Higest Sale
              </h1>
              <h1 className="text-white mx-4 my-4 font-bold text-2xl  text-center ">
                $263.6k
              </h1>
            </div>
            <div className="border-2 rounded-2xl my-7 mx-7">
              <h1 className="text-gray-400 mx-4 my-4  text-center">
                Floor price
              </h1>
              <h1 className="text-white mx-4 my-4 font-bold text-2xl  text-center">
                $4.5K
              </h1>
            </div>
            <div className="border-2 rounded-2xl my-7 mx-7">
              <h1 className="text-gray-400 mx-4 my-4  text-center">Market Cap</h1>
              <h1 className="text-white mx-4 my-4 font-bold text-2xl  text-center">
                $93.3M
              </h1>
            </div>
            <div className="border-2 my-7 mx-7 rounded-2xl">
              <h1 className="text-gray-400 mx-4 my-4   mt-2  text-center">
                Items
              </h1>
              <h1 className="text-white mx-4 my-4  font-bold text-2xl  text-center">
                20.7K
              </h1>
            </div>
            <div className="border-2 rounded-2xl my-7 mx-7">
              <h1 className="text-gray-400 mx-4 my-4  text-center">Owners</h1>
              <h1 className="text-white mx-4 my-4 font-bold text-2xl  text-center">
                10.8K
              </h1>
            </div>
            <div className="border-2 rounded-2xl my-7 mx-7">
              <h1 className="text-gray-400 mx-4 my-4 text-center">
                Total Volume
              </h1>
              <h1 className="text-white mx-4 my-4 text-center font-bold text-2xl">
                $66.2M
              </h1>
            </div>
          </div>
        </div>
        <div className="block pl-20 pr-20 py-4">
          <p className="text-gray-400 text-center">
            {collectionData.description}
          </p>
        </div>

        <div>
          <hr className="mr-20 ml-20"></hr>
          <h1 className="text-white font-bold text-2xl text-center py-4">
            Collections
          </h1>
        </div>
        <div className="pt-8">
          <div className="grid lg:grid-cols-4 lg:grid-row-5  grid-cols-1 grid-row-12">

            {collectionItems.map((nft, i) => {
              return (
                <NFTCard
                  key={i}
                  nft={nft}
                />
              )
            })}
            
          </div>
        </div>

      </div> : <></>}
    </div>
  );
};
export default SingleCollection;
