import Image from 'next/image';
import React from 'react';

import { podcastInfo } from '../utils/PodcastInfo';
import images from '../assets';

interface PodcastProps {
    theme: string;
}

function Podcast({ theme }: PodcastProps) {
  return (
    <div className="mb-20 md:flex flex-col w-[335px] p-5 md:w-[325px] bg-white rounded-2xl justify-center dark:bg-dark3">
      <div className="flex flex-row gap-2 items-center justify-start mb-5">
        <p className="flex font-semibold text-base text-darkGray dark:text-white ">Podcasts</p>
        <Image src={theme === 'light' ? images.blackarrow : images.whitearrow} alt="arrow icon" className=" w-3 h-2.5 " />
      </div>
      <div className="flex flex-col gap-2 ">
        {podcastInfo.map((item, index) => (
          <div key={index} className="flex flex-row gap-2.5 items-center justify-start rounded-lg cursor-pointer hover:bg-light3 dark:hover:bg-dark4">
            <div>
              <Image src={item.icon} alt="icon" className=" w-[58px] h-[58px] object-contain " />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-2 items-center w-[193px]">
                <p className="font-semibold text-xs text-darkGray dark:text-white">{item.title}</p>
                <Image src={images.podcastsarrow} alt="arrow icon" className="w-3 h-2.5" />
              </div>
              <p className="font-normal text-[10px] text-lightGray">{item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Podcast;

