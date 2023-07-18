/* eslint-disable no-console */
'use client';
import { ActionItem } from '@/utils/Action';
import Image from 'next/image';
import React from 'react';
import {useRouter} from "next/navigation"

import images from '../../assets';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ActionBar({ likeCount, showAdmin, postId}: any) {
    const router = useRouter();
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
    ...(showAdmin ? [
        {
          icon: images.deleteicon,
          title: 'Delete',
          action: () => {
            console.log('show delete modal');
          }
        },
        {
          icon: images.editicon,
          title: 'Edit',
          action: () => {
            router.push(`/post-details/${postId}/edit`);
          },
        }
      ] : []),
    ];


  return (
    <div className="flex flex-col  justify-between md:items-start items-center  dark:bg-dark3 md:max-w-[210px]  w-[335px] h-fit mx-auto md:mx-0 p-[20px] bg-white rounded-[20px] order-1 md:order-0  ">
      {actionInfo.map((item, id) => (
        <div
          key={id}
          onClick={item?.action}
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
