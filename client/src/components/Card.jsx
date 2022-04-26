import classNames from "classnames";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ props }) => {
  console.log(props);
  const price = ethers.utils.formatEther(props.price.toString());
  const [loading, setloading] = useState(true);
  const [image, setimage] = useState('https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b:11534/c5127bc9');
  const [title,settitle] = useState("");
  const fetchImage = async () => {
    await fetch(props.tokenURI)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        setimage(data.image);
        settitle(data.name);
        setloading(false);
      });
  }

  useEffect(() => {
    setimage(props.imageURL);
    fetchImage();
  }, [])


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
            )}>No more items found</span>
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
    <>
    {loading ? <NoItems /> :  
      <div className="border-2 rounded-2xl mx-auto mb-3 max-w-[270px] dNsYU min-w-[269px]">
      <div className={classNames(
          'hKPgxQ'
        )}>
          <img
            className="rounded-full mx-auto w-[30px] h-[30px] ml-3 mt-2 mb-2"
            src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/avatar/QmTNRdwYvd5nsMVoUGX4Gu2ZWwgbKbu9NNdxDLtcwEE8Kr"
          />
          <button className=" fLhTAG" type="button">
            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className=""><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path></svg>
          </button>
        </div>
        
          <img
            className="w-full mt-[8px] h-auto my-2 mx-auto rounded-lg max-h-[230px] max-w-[230px]"
            src={image}
            alt=""
          />
        <Link to={`assets/${props.tokenId}`}>
            <div className="sc-bdvvtL sc-gsDKAQ sc-dpAhYB sc-kMyqmI ieSfBq jrDvel jiNilR">
              <h1 className="cKmyUG">{title}</h1>
              <img src="https://rarible.com/9b703a21b9f93a1f0065.svg" className="h-[24px] w-[24px]" />
            </div>
        </Link>
        <div className="fEdSMd">
          <span className="hAjoXB">
            <span className="jeeEJR">
              <span className="iQeOnQ">
                <span className="">{price} ETH</span>
              </span>
              <span className="sViYF">
                <span className="jpclKj">1/1</span>
              </span>
            </span>
            <span className="fhzJjE">
              <button type="button" className="bEOvQm">
                <span className="bjByIS">Buy now</span>
              </button>
            </span>
          </span>
        </div>
      </div>
}
    </>
  );
};
export default Card;