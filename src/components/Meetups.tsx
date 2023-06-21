import Image from 'next/image';
import React from 'react';

import { MeetupsInfo } from '../utils/Meetups';
import images from '../assets';

interface MeetupsProps {
    theme: string;
}

function Meetups({ theme }: MeetupsProps) {
  return (
    <div className="flex flex-col md:w-[325px]  w-[335px] rounded-2xl bg-white dark:bg-dark3">
      <div className="flex flex-row gap-2 items-center justify-start">
        <p className="font-semibold text-base text-darkGray dark:text-white mt-5 ml-5 mb-5">Meetups</p>
        <Image src={theme === 'light' ? images.blackarrow : images.whitearrow} alt="arrow icon" className="w-3 h-2.5 text-darkGray dark:text-white" />
      </div>
      <div className="flex flex-col justify-between max-h-[254px] ml-4 mr-[15px] mb-4 gap-y-2">
        {MeetupsInfo.map((item, index) => (
          <div key={index} className="flex flex-row gap-2.5 items-center justify-start rounded-lg cursor-pointer">
            <div className=" flex flex-col rounded-md py-1 px-2.5 border-light3 dark:border-dark3 justify-center items-center bg-light3 dark:bg-dark4">
              <span className="text-sm font-semibold">{item.date.split(' ')[0]}</span>
              <span className="text-2xl text-[#5D95E8] font-bold">{item.date.split(' ')[1]}</span>
            </div>
            <div className="flex flex-col w-full rounded-lg p-0.5 hover:bg-light3 dark:hover:bg-dark4">
              <div>
                <p className="text-sm font-semibold text-darkGray dark:text-light2">{item.title}</p>
              </div>
              <div className="flex flex-row gap-1.5">
                <Image src={item.icon} alt="icon" className=" w-4 h-4 object-contain" />
                <p className="font-semibold text-xs text-lightGray">{item.location}</p>
              </div>
              <div className="flex flex-row justify-start gap-2.5 mt-2.5">
                {item.tags.map((tag, id) => (
                  <div key={id} className=" rounded-lg text-[9px] py-0.5 px-2 font-semibold text-slateGray bg-light3 dark:bg-dark4">{tag}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meetups;
