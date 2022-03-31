import React,{useState} from "react";
import classNames from "classnames";

import "./Singlenft.css";


const nftAbout = () => {
  const [details , setDetails] = useState(false);
  const [bid , setBid] = useState(false);
  const [history , setHistory] = useState(false);

  return (
    <div className="bg-black ">
      <div className="flex flex-col lg:flex-row image-div ">
        <div>
          <img
            className="image  lg:mx-60 w-80 h-116 pt-6 pb-8 pr-6 pl-6 rounded-[50px]  "
            src="https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0x2b4307153072ac60dbe6100e7d4e8d61834d16cc:9/f94fbc26"
          ></img>
        </div>
        <div className="pt-6 items-center mx-20">
          <h1 className="flex text-2xl lg:text-4xl text-white font-bold">
            The Minimum
          </h1>
          <p className="text-lg text-gray-400 pt-2">
            On sale for <span className="span-color">6 ETH</span>
          </p>
          <h3 className="text-lg text-white pt-4 pr-4">
            I love this image so much. But, to matter is just the first step. We
            have a long way to go.
          </h3>
          <div className="flex flex-row">
            <div>
              <h3 className="text-lg text-white pt-7">
                Creator <span className="text-gray-400">10% royalties</span>
              </h3>
              <div className="flex ">
                <img
                  className="shrink-0 h-10 w-10 rounded-full mt-1"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9IjExMjE3Mjk4MDg2NDAiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSJyZ2IoMjU1LCA2MCwgMCkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDAsIDI1NSwgNjApIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCMxMTIxNzI5ODA4NjQwKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgPC9nPgo8L3N2Zz4="
                ></img>
                <h3 className="text-white pt-3 pl-1">Missan Harirman</h3>
              </div>
              <div>
                <ul
                  className="flex mt-10  " 
                
                >
                  <li className={classNames( " mx-1  rounded-t-lg border-b-2  inline-block " ,
                  details ?"border-white text-white":" border-gray-500 text-gray-500 hover:text-white hover:border-white")}>
                    <button onClick={()=> {
                      setDetails(!details)
                    }} className="font-bold">Details</button>
                  </li>
                  <li className={classNames(" mx-3  rounded-t-lg border-b-2  inline-block", bid? "border-white text-white":" border-gray-500 text-gray-500 hover:text-white hover:border-white" )}>
                    <button onClick={()=>{
                      setBid(!bid)
                    }} className="font-bold">
                      Bids
                    </button>
                  </li>
                  <li class={classNames( " mx-2  rounded-t-lg border-b-2 border-gray-500 inline-block ",history? "text-white border-white" : " text-gray-500 hover:text-white hover:border-white")}>
                    <button 
                    onClick={()=>{
                      setHistory(!history)
                    }}
                    className="font-bold">History</button>
                  </li>
                </ul>
              </div>

              <div>
                <div className={classNames(" h-56 w-80 pt-4 overflow-auto  ",details?"block":"hidden")}>
                  <div>
                    <hr />

                    <h1 className="text-gray-400 pt-5">Owner</h1>
                    <img
                      className="shrink-0 h-10 w-10 rounded-full mt-1"
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9IjExMjE3Mjk4MDg2NDAiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSJyZ2IoMjU1LCA2MCwgMCkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDAsIDI1NSwgNjApIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCMxMTIxNzI5ODA4NjQwKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgPC9nPgo8L3N2Zz4="
                    ></img>
                    <h3 className="text-white pt-3 pl-1">Missan Harirman</h3>
                    <div className="mb-4">
                      <h1 className="text-gray-500 mt-4 ">Properties</h1>
                      <hr />
                    </div>

                    <div className="  ">
                      <button className="mt-4 border-2 border-gray-500 rounded-xl ">
                        <h1 className="text-blue-600 px-14">Artist</h1>
                        <h1 className="text-white">Misan Harirman</h1>
                        <h1 className="text-gray-500 text-sm">91.33% rarity</h1>
                      </button>
                    </div>
                    <h1 className="py-4 text-gray-500">Blockchain</h1>
                    <div className="flex pb-2">
                      <img
                        className="pb-2"
                        src="https://rarible.com/9b703a21b9f93a1f0065.svg"
                      ></img>
                      <h1 className="text-white  px-2 ">Ethereum</h1>
                    </div>
                  </div>
                </div>
               
                <div className={classNames(" px-2 pt-4 pb-3", bid?"block":"hidden")}>
                  <hr/>
                  <h1 className="text-gray-500 font-bold py-10 ">No active bids yet. Be the first to make a bid!</h1>
                  <hr/>
                </div>
                <div className={classNames("flex my-4",history? "block":"hidden")}>
                
                <img
                  className="shrink-0 h-10 w-10 rounded-full mt-1"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9IjExMjE3Mjk4MDg2NDAiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSJyZ2IoMjU1LCA2MCwgMCkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDAsIDI1NSwgNjApIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCMxMTIxNzI5ODA4NjQwKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgPC9nPgo8L3N2Zz4="
                ></img>
                <div className="flex-col">
                <h3 className="text-gray-500  pl-1">Listed for <span className="span-color"> 6 ETH</span></h3>
                <p className="text-gray-500  pl-1">by <span className="span-color">Misan Harriman</span>  3/16/2022, 3:36 AM</p> 
                </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-400 pl-20 pt-7">Collection</h3>
              <div className="flex pt-1 pl-16">
                <img
                  className="shrink-0 h-12 w-12 rounded-full"
                  src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x2b4307153072ac60dbe6100e7d4e8d61834d16cc/avatar/QmNgVPQsp7b2hbdXAcJbx5WvTvexeJLMxt3sL8ZQ158721"
                ></img>
                <h3 className="text-white pt-3 pl-1">The Purpose Of Light.</h3>
              </div>
            </div>
            

            
          </div>
          <div className="mt-12 flex pb-3">
            <div>
              <div className="bg-blue-700 text-white font-bold rounded-full px-8 py-1">Buy now</div>
            </div>
            <div className="mx-28 ">  
            <div className=" flex bg-blue-700 text-white font-bold rounded-full px-8 py-1">Place a bid</div>
            </div>
          </div>
          <div>

          </div>
        </div>
        
        
      </div>
      
    </div>
    
  );
};
export default nftAbout;
