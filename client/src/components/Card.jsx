import classNames from "classnames";
import React from "react";

const Card = ({ props }) => {
  return (
    <>
    <div className="border-2 rounded-2xl mx-auto mb-3 dNsYU min-w-[269px]">
      <div className={classNames(
        'hKPgxQ'
      )}>
        <img
          className="rounded-full mx-auto w-10 h-10 ml-3 mt-2 mb-2"
          src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/avatar/QmTNRdwYvd5nsMVoUGX4Gu2ZWwgbKbu9NNdxDLtcwEE8Kr"
        />
        <button className=" fLhTAG" type="button">
          <svg viewBox="0 0 14 4" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className=""><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
        </button>
      </div>
      <img
        className="w-full mt-[8px] h-auto my-2 mx-auto rounded-lg max-h-[230px] max-w-[230px]"
        src="https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b:11534/c5127bc9"
      ></img>
      <div class="sc-bdvvtL sc-gsDKAQ sc-dpAhYB sc-kMyqmI ieSfBq jrDvel jiNilR">
        <a href="/token/0xdd991ec0a7cd7c7334e3e4553aa5e4fb850168d9:10165"
          className="cKmyUG">#119 EVOL ANTI-HERO</a>
        <img src="https://rarible.com/9b703a21b9f93a1f0065.svg" loading="lazy" className="h-[24px] w-[24px]" />
      </div>
      <div className="flex jiNilR">
            <h1 className="text-gray-400 cKmyUG">Auction 1/1</h1>
            <h1 className="text-blue-600  mb-2 cKmyUG">Bid 6 wETH</h1>
          </div>
    </div>
    
    </>
  );
};
export default Card;