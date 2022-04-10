const nftSection = () => {
  return (
    <div>
      <div className=" bg-black  text-white ">
        <div>
          <h1 className="text-white font-bold text-3xl px-8 py-3">
            Top collections
          </h1>
        </div>
        <div className=" lg:px-6 lg:py-3 grid lg:grid-cols-4 lg:grid-rows-3 gap-4     grid-cols-2 grid-rows-6 ml-6">
          <div className="flex">
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
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xed5af388653567af2f388e6224dc7c4b3241c544/avatar/QmbJit1a9Jp35D2AZdiTdfLn6JCXQSbn1Lw237qZWfCMfe"
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">Azuki</h1>
              <p className="pl-2 text-gray-400">$2,980,133</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full lg:w-12 lg:h-12     w-9 h-9 "
              src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x60e4d786628fea6478f785a6d7e704777c86a7c6/avatar/QmaoafyjBy97NKEPZzAD3FK8RcwCJHb263dDJbhCaXPWpo"
            ></img>
            <div>
              <h1 className="lg:text-lg  lg:font-bold lg: pl-2  text-lg font-bold">
                Mutant Ape Yacht Club
              </h1>
              <p className="pl-2 text-gray-400">$5,112,022</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/avatar/QmfNrXe67J4t1EvXLxPhxTavQCLryurWFj1DDRKkjNQqit"
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">Bored Ape Yacht Club</h1>
              <p className="pl-2 text-gray-400">$3,935,809</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9IjEyNTc1NDY5MDgxNzciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSJyZ2IoMjU1LCA2MCwgMCkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDAsIDI1NSwgNjApIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCMxMjU3NTQ2OTA4MTc3KSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgPC9nPgo8L3N2Zz4="
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">Kiwami</h1>
              <p className="pl-2 text-gray-400">$2,699,823</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9IjE1ODAwMzU1NjI1ODYiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSJyZ2IoMzgsIDAsIDI1NSkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDI1NSwgMzgsIDApIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCMxNTgwMDM1NTYyNTg2KSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgPC9nPgo8L3N2Zz4="
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">0xddb149ae8e663...</h1>
              <p className="pl-2 text-gray-400">$27,868,412</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x4b61413d4392c806e6d0ff5ee91e6073c21d6430/avatar/QmdMCh8pz7Bc822VrGXUgszAj2snusSZAvjUupf8qKsZTR"
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">MURI</h1>
              <p className="pl-2 text-gray-400">$2,188,476</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9IjY0MjQ1NzgzNjQxNyI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9InJnYigxNjYsIDI1NSwgMCkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDAsIDE2NiwgMjU1KSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjNjQyNDU3ODM2NDE3KSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgPC9nPgo8L3N2Zz4="
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">The Art Of Seasons</h1>
              <p className="pl-2 text-gray-400">$1,984,646</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/avatar/QmTNRdwYvd5nsMVoUGX4Gu2ZWwgbKbu9NNdxDLtcwEE8Kr"
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">CloneX</h1>
              <p className="pl-2 text-gray-400">$1,277,725</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xd4e4078ca3495de5b1d4db434bebc5a986197782/avatar/QmWAnvv3NKhYeHs6MDhvQzjcy68j7wmzHin7ofKgQkQ5cK"
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">Autoglyphs</h1>
              <p className="pl-2 text-gray-400">$1,161,109</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xe785e82358879f061bc3dcac6f0444462d4b5330/avatar/QmQ6LSQGjGCbiRaeivRiAJHwxcKsZ2fRnFtLMNQKLJZWc8"
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">World of women</h1>
              <p className="pl-2 text-gray-400">$1,085,944</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-12 h-12"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9IjkwMzI4NjEyMDc4NyI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9InJnYigxNzAsIDAsIDI1NSkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDI1NSwgMTcwLCAwKSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjOTAzMjg2MTIwNzg3KSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgPC9nPgo8L3N2Zz4="
            ></img>
            <div>
              <h1 className="text-lg font-bold pl-2">Seekers</h1>
              <p className="pl-2 text-gray-400">$942,829</p>
            </div>
          </div>
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
        <div className="border-2 rounded-2xl mx-auto mb-3">
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
        </div>
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
export default nftSection;
