import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { MarketplaceContext } from "../context/MarketplaceContext";
import axios from "axios";
import "./Singlenft.css";
import { useNavigate, useParams } from "react-router-dom";
import { ethers } from "ethers";
import { WalletContext } from "../context/WalletContext";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import Loader from "./Loader";
import { FaSpinner } from "react-icons/fa";
import { TransactionApprove } from "./Create/CreateNFT/Modal/ModalContent";
import BuyingNFT from "./Create/CreateNFT/Modal/ModalContent/BuyingNFT";
import ListingNFT from "./Create/CreateNFT/Modal/ModalContent/ListingNFT";


const nftAbout = () => {
  const [details, setDetails] = useState(true);
  const [NFTData, setNFTData] = useState();
  const [metadata, setMetadata] = useState();
  const [bid, setBid] = useState(false);
  const [history, setHistory] = useState(false);
  const navigate = useNavigate();

  const { nftId } = useParams();
  const [creator, setCreator] = useState();
  const [owner, setOwner] = useState();
  const [collection, setCollection] = useState();
  const [isBuying, setIsBuying] = useState(false);
  const [isListing, setIsListing] = useState(false);

  const { listNFTonMarket, getSingleNFT, buyNFT, user, getUserInfo, getCollectionInfo } = useContext(MarketplaceContext);
  const { currentAccount } = useContext(WalletContext);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [listingPrice, setListingPrice] = useState();

  function handleChange(e) {
    setListingPrice(e.target.value);
  }

  const buyNow = async () => {
    const res = await buyNFT(parseFloat(NFTData.price, 16), parseInt(NFTData.tokenId, 16));

    console.log("res",res);
  };

  const listNow = async () => {
    setIsListing(true);
    onCloseModal();
    await listNFTonMarket(NFTData.tokenId, ethers.utils.parseEther(listingPrice), NFTData.collectionId);
  };

  useEffect(async () => {
    const token = await getSingleNFT(nftId);
    console.log(token);
    setNFTData(token);

    setCreator(await getUserInfo(token.creator));
    setOwner(await getUserInfo(token.owner));
    setCollection(await getCollectionInfo(parseInt(token.collectionId, 16)));


    axios.get(token.tokenURI).then((res) => {
      console.log(res.data);
      setMetadata(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  const closeModal = () => {
    setIsBuying(false);
  }; 

  return (
    <div className="bg-black ">
      {metadata ? <div className="flex flex-col lg:flex-row image-div ">
        <div>
          <img
            className="image lg:mx-60 w-96 h-96 pt-6 pb-8 pr-6 pl-6 rounded-[50px]  "
            src={metadata.image}
          ></img>
        </div>
        <div className="pt-6 items-center mx-20">
          <h1 className="flex text-2xl lg:text-4xl text-white font-bold">
            {NFTData.name}
          </h1>
          <p className="text-lg text-gray-400 pt-2">
            On sale for <span className="span-color">{ethers.utils.formatEther(NFTData.price)} MATIC</span>
          </p>
          <h3 className="text-lg text-white pt-4 pr-4">
            {metadata.description}
          </h3>
          <div className="flex flex-row">
            <div>
              <h3 className="text-lg text-white pt-7">
                Creator
              </h3>
              <div className="flex ">
                <img
                  className="shrink-0 h-10 w-10 rounded-full mt-1"
                  src={creator.imageURL}
                ></img>
                <h3 className="text-white pt-3 pl-1">{creator.name}</h3>
              </div>
              <div>
                <ul
                  className="flex mt-10  "

                >
                  <li className={classNames(" mx-1  rounded-t-lg border-b-2  inline-block ",
                    details ? "border-white text-white" : " border-gray-500 text-gray-500 hover:text-white hover:border-white")}>
                    <button onClick={() => {
                      setDetails(details)
                    }} className="font-bold">Details</button>
                  </li>
                </ul>
              </div>

              <div>
                <div className={classNames(" h-56 w-80 pt-4 overflow-auto  ", details ? "block" : "hidden")}>
                  <div>
                    <hr />

                    <h1 className="text-gray-400 pt-5">Owner</h1>
                    {owner.name ? <div><img
                      className="shrink-0 h-10 w-10 rounded-full mt-1"
                      src={owner.imageURL}
                    ></img>
                      <h3 className="text-white pt-3 pl-1">{owner.name}</h3></div> : <h1 className="text-white">Owned by Marketplace Contract 📃</h1>}
                    <div className="mb-4">
                      <h1 className="text-gray-500 mt-4 ">Properties</h1>
                      <hr />
                    </div>

                    <div className="  ">
                      <button className="mt-4 border-2 border-gray-500 rounded-xl ">
                        <h1 className="text-blue-600 px-14">Artist</h1>
                        <h1 className="text-white">{creator.name}</h1>
                        <h1 className="text-gray-500 text-sm">91.33% rarity</h1>
                      </button>
                    </div>
                    <h1 className="py-4 text-gray-500">Blockchain</h1>
                    <div className="flex pb-2">
                      <img
                        className="pb-2"
                        src="https://rarible.com/9b703a21b9f93a1f0065.svg"
                      ></img>
                      <h1 className="text-white  px-2 ">Polygon</h1>
                    </div>
                  </div>
                </div>

                <div className={classNames(" px-2 pt-4 pb-3", bid ? "block" : "hidden")}>
                  <hr />
                  <h1 className="text-gray-500 font-bold py-10 ">No active bids yet. Be the first to make a bid!</h1>
                  <hr />
                </div>
                <div className={classNames("flex my-4", history ? "block" : "hidden")}>

                  <img
                    className="shrink-0 h-10 w-10 rounded-full mt-1"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9IjExMjE3Mjk4MDg2NDAiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSJyZ2IoMjU1LCA2MCwgMCkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDAsIDI1NSwgNjApIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCMxMTIxNzI5ODA4NjQwKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgPC9nPgo8L3N2Zz4="
                  ></img>
                  <div className="flex-col">
                    <h3 className="text-gray-500  pl-1">{NFTData.isListed ? `Listed for ${ethers.utils.formatEther(NFTData.price)} MATIC` : "Not listed on marketplace yet"}</h3>
                    <p className="text-gray-500  pl-1">by <span className="span-color">Misan Harriman</span>  3/16/2022, 3:36 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-400 pl-20 pt-7">Collection</h3>
              {collection.name ? <div className="flex pt-1 pl-16">
                <img
                  className="shrink-0 h-12 w-12 rounded-full"
                  src={collection.imageURL}
                ></img>
                <h3 className="text-white pt-3 pl-1">{collection.name}</h3>
              </div> : <h1 className="text-white">Not added to any collection yet.</h1>}
            </div>



          </div>

          {!NFTData.isListed && NFTData.owner.toLowerCase() === currentAccount.toLowerCase() ? <div className="mt-12 flex pb-3">

            <button onClick={onOpenModal} type="button" className="text-white mb-10 mt-7 block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-7 py-2.5 text-center mr-2">List Now</button>
            <Modal open={open} onClose={onCloseModal} center closeIcon={<AiOutlineCloseCircle size={26} />}>
              <label for="price" className="block text-sm text-white font-bold mb-2 mt-5">Price</label>
              <input onChange={handleChange} className="shadow appearance-none border rounded w-max py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" name="price" type="number" placeholder="Item Price" />
            
              <button onClick={listNow} type="button" className="text-white mb-10 mt-7 block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-7 py-2.5 text-center mr-2">{isListing ? <FaSpinner /> : "List NFT"}</button>
            
            </Modal>
          </div> : <></>}


          {NFTData.isListed && NFTData.seller.toLowerCase() !== currentAccount.toLowerCase() ? <div className="mt-12 flex pb-3">
            <button onClick={()=> {setIsBuying(true); buyNow();}} type="button" className="text-white mb-10 mt-7 block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-7 py-2.5 text-center mr-2">{isBuying ? <FaSpinner /> : "Buy Now"}</button>
          </div> : <></>}
          {isBuying ? (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-flow-row gap-5">


                    {/* Approving and Buying NFT */}
                    <BuyingNFT />


                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>Close</button>
                  </div>
                </div>
              </div>
            </div>

          ) : <></>}

          {isListing ? (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-flow-row gap-5">


                    {/* Approving and Listing NFT */}
                    <ListingNFT />


                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => {setIsListing(false)}}>Close</button>
                  </div>
                </div>
              </div>
            </div>

          ) : <></>}
        </div>


      </div> : <></>}

    </div>

  );
};
export default nftAbout;
