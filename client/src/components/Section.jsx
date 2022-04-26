import { useContext, useEffect, useState } from "react";
import { MarketplaceContext, MarketplaceProvider } from "../context/MarketplaceContext";
import Card from "./Card";
import CollectionCard from "./Collection/CollectionCard";

const NftSection = ({ allCollections }) => {
  const [nftList, setNftList] = useState();
  const {fetchNFTs} = useContext(MarketplaceContext);

  useEffect( async () => {
    const data = await fetchNFTs();
    setNftList(data);
  }, []);
  
  return (
    <div>
      <div className=" bg-black  text-white ">
        <div>
          <h1 className="text-white font-bold text-3xl px-8 py-3">
            Top collections
          </h1>
        </div>
        <div className=" lg:px-6 lg:py-3 grid lg:grid-cols-4 lg:grid-rows-3 gap-4     grid-cols-2 grid-rows-6 ml-6">

          {allCollections.length ? allCollections.map((collection, i) => {
            console.log(collection);
            return (
              <CollectionCard 
                key = {i}
                collection = {collection}
              />
            )
          }) : <></>}
          {/* <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xf61f24c2d93bf2de187546b14425bf631f28d6dc/avatar/QmSJwqvWiQmHXqQugbi63uDLf7TzACzHcSJG33GkteNpE6"
            ></img>
            <div>
              <h1 className="text-lg font-bold  pl-2">
                World of women galaxies
              </h1>
              <p className="pl-2 text-gray-400">$27,868,412</p>
            </div>
          </div> */}
          <br />

          <h1>Hot Bids</h1>

          <br />

          {nftList ? nftList.filter((nft) => {
            return nft.isListed
          }).map((nft, i) => {
            return (
              <Card
                key={i}
                props={nft}
              />
            );
          }) : <></>
          }

        </div>
      </div>
      <div className=" bg-black flex">
        <h1 className="flex text-white font-bold text-3xl px-8 py-5">
          Hot bids{" "}
          <img
            className="w-9 h-8 mb-1 ml-2"
            src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png"
            alt=""
          />
        </h1>
      </div>
      <div className="bg-black grid lg:grid-cols-4 lg:grid-rows-1 lg:gap-4     grid-cols-2 grid-rows-2">
        {/* <div className="border-2 rounded-2xl mx-auto mb-3">
          <img
            className="rounded-full w-10 h-10 ml-3 mt-2 mb-2"
            src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/avatar/QmTNRdwYvd5nsMVoUGX4Gu2ZWwgbKbu9NNdxDLtcwEE8Kr"
          ></img>
          <img
            className="w-44 h-60 my-2 ml-8 rounded-lg"
            src="https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b:11534/c5127bc9"
          ></img>
          <div className="flex mt-8">
            <h1 className="text-white mx-8">CloneX #2404</h1>
            <img
              className="mx-6 w-8 h-8"
              src="https://rarible.com/9b703a21b9f93a1f0065.svg"
            ></img>
          </div>
          <div>
            <h1 className="text-gray-400 mx-7">Auction 1/1</h1>
            <h1 className="text-blue-600 mx-7 mt-1 mb-2">Bid 6 wETH</h1>
          </div>
        </div> */}
        <div className="border-2 rounded-2xl mx-auto mb-3  ">
          <img
            className="rounded-full w-10 h-10 ml-3 mt-2 mb-2"
            src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/avatar/QmTNRdwYvd5nsMVoUGX4Gu2ZWwgbKbu9NNdxDLtcwEE8Kr"
          ></img>
          <img
            className="w-44 h-60 my-2 ml-8 rounded-lg"
            src="https://api.sandbox.game/lands/cc5f9779-d4cc-4389-bb6e-3048fe317a36/v2/preview-500px-x-500px.jpg"
          ></img>
          <div className="flex mt-8">
            <h1 className="text-white mx-8">LAND(24,-66)</h1>
            <img
              className="mx-6 w-8 h-8"
              src="https://rarible.com/9b703a21b9f93a1f0065.svg"
            ></img>
          </div>
          <div>
            <h1 className="text-gray-400 mx-7">Not for sale x1</h1>
            <h1 className="text-blue-600 mx-7 mt-1 mb-2">Bid 2 wETH</h1>
          </div>
        </div>
        <div className="border-2 rounded-2xl mx-auto mb-3">
          <img
            className="rounded-full w-10 h-10 ml-3 mt-2 mb-2"
            src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/avatar/QmTNRdwYvd5nsMVoUGX4Gu2ZWwgbKbu9NNdxDLtcwEE8Kr"
          ></img>
          <img
            className="w-44 h-60 my-2 ml-7 rounded-lg"
            src="https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x79fcdef22feed20eddacbb2587640e45491b757f:7554/3de4e9b"
          ></img>
          <div className="flex mt-8">
            <h1 className="text-white mx-8">mfer #7554</h1>
            <img
              className="mx-6 w-8 h-8"
              src="https://rarible.com/9b703a21b9f93a1f0065.svg"
            ></img>
          </div>
          <div>
            <h1 className="text-gray-400 mx-7">Not for sale x1</h1>
            <h1 className="text-blue-600 mx-7 mt-1 mb-2">Bid 0.01 wETH</h1>
          </div>
        </div>
        <div className="border-2 rounded-2xl mx-auto mb-3">
          <img
            className="rounded-full w-10 h-10 ml-3 mt-2 mb-2"
            src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/avatar/QmTNRdwYvd5nsMVoUGX4Gu2ZWwgbKbu9NNdxDLtcwEE8Kr"
          ></img>
          <img
            className="w-44 h-60 my-2 ml-6 rounded-lg"
            src="https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d:9106/de0c2d4"
          ></img>
          <div className="flex mt-8">
            <h1 className="text-white mx-8">Fluf #9106</h1>
            <img
              className="mx-6 w-8 h-8"
              src="https://rarible.com/9b703a21b9f93a1f0065.svg"
            ></img>
          </div>
          <div>
            <h1 className="text-gray-400 mx-7">7 ETH 1/1</h1>
            <h1 className="text-blue-600 mx-7 mt-1 mb-2">Buy now</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NftSection;
