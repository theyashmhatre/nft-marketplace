import { useContext, useEffect, useState } from "react";
import { MarketplaceContext, MarketplaceProvider } from "../context/MarketplaceContext";
import Card from "./Card";
import CollectionCard from "./Collection/CollectionCard";

const NftSection = ({ allCollections }) => {
  const [nftList, setNftList] = useState();
  const { fetchNFTs } = useContext(MarketplaceContext);

  useEffect(async () => {
    const data = await fetchNFTs();
    setNftList(data);
  }, []);

  return (
    <div>
      <div className=" bg-black py-8  text-white ">
        <div>
          <h1 className="text-white font-bold text-3xl pr-8 pl-[4rem]  pb-[2rem] pt-[3rem]">
            Top collections
          </h1>
        </div>
        <div className=" lg:px-6 mx-[20%] grid lg:grid-cols-4  gap-4     grid-cols-2  ml-[2.5rem]">

          {allCollections.length ? allCollections.map((collection, i) => {
            console.log(collection);
            return (
              <CollectionCard
                key={i}
                collection={collection}
              />
            )
          }) : <></>}
        </div>
        <br />
        <h1 className="text-white font-bold text-3xl pt-[2rem] px-[2rem] pb-[2rem]">Hot Bids</h1>
        <br />
        <div className=" lg:px-6 mx-[20%] grid lg:grid-cols-3  gap-4     grid-cols-2  ml-[2.5rem]">
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
    </div>
  );
};
export default NftSection;
