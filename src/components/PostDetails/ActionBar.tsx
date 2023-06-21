import { ActionItem } from '@/utils/Action';
import Image from 'next/image';
import React from 'react';

import images from '../../assets';

function ActionBar({ likeCount }: any) {
  const actionInfo: ActionItem[] = [
    {
      icon: images.HeartClicked,
      title: likeCount + ' Hearts',
    },
    {
      icon: images.Comment,
      title: '3086 Comments',
    },
    {
      icon: images.Share,
      title: '84 Share',
    },
    {
      icon: images.Report,
      title: 'Report',
    },
  ];

  return (
    <div className="flex flex-col  justify-between md:items-start items-center  dark:bg-dark3 md:max-w-[210px]  w-[335px] h-[210px] mx-auto md:mx-0 p-[20px] bg-white rounded-[20px] order-1 md:order-0  ">
      {actionInfo.map((item, id) => (
        <div
          key={id}
          className="flex flex-row justify-start items-center rounded-lg hover:bg-light3 dark:hover:bg-dark4 p-1 gap-2 w-full cursor-pointer"
        >
          <div className="flex bg-light3 dark:bg-dark4 rounded-lg w-[30px] h-[30px] items-center justify-center">
            <Image
              src={item.icon}
              alt="icon"
              className=" w-6 h-6 object-contain"
            />
          </div>
          <div className="flex-col">
            <div className="flex flex-row gap-1 items-center">
              <div className="relative flex flex-row gap-1">
                <p className="flex font-semibold text-xs hover:dark:text-white hover:text-darkNavy text-lightGray">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActionBar;
