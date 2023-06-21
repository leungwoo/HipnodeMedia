import Image from 'next/image';
import React from 'react';

import { PerformanceData } from '../utils/PerformanceData';
import images from '../assets';

interface ProfileRightSidebar {
  theme: string;
}

const performanceImages = [
  images.ProfileSidebarImage1,
  images.ProfileSidebarImage2,
  images.ProfileSidebarImage3,
  images.ProfileSidebarImage4,
  images.ProfileSidebarImage5,
  images.ProfileSidebarImage6,
]

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ProfileRightSidebar({ theme }: ProfileRightSidebar) {
  return (
    <div className="mb-24 md:flex flex-col w-[335px] p-5 md:w-[325px] bg-white rounded-2xl justify-center dark:bg-dark3">
      <div className="flex flex-col justify-start mb-5">
        <div className="flex jusce items-center gap-2">
          <p className="flex font-semibold text-base text-darkGray dark:text-white ">
            Perfomance
          </p>
          <Image
            src={theme === 'light' ? images.blackarrow : images.whitearrow}
            alt="arrow icon"
            className=" w-3 h-2.5 "
          />
        </div>
        <small className="text-[#97989D]">
          Showing data from the last 30 days
        </small>
      </div>
      <div className="flex flex-col gap-2 max-h-[400px] md:max-h-[500px] overflow-y-scroll scrollbar-none pr-5">
        {PerformanceData.map((data, index) => (
          <div className="flex flex-row gap-2.5 items-start md:items-center justify-start rounded-lg cursor-pointer mb-6">
            <div>
              <Image
                // src={data.image}
                src={performanceImages[getRandomNumber(0, performanceImages.length - 1)]}
                alt="icon"
                className=" w-[58px] h-[58px] object-contain "
              />
            </div>
            <div className="flex flex-col justify-around w-full items-start">
              <div className="flex flex-col md:hidden">
                <div className="flex">
                  <p className="text-xs font-semibold text-[#3F4354] dark:text-white">
                    {data.post}
                  </p>
                  <Image
                    src={data.avatar}
                    alt="icon"
                    className=" w-[20px] h-[20px] object-contain "
                  />
                </div>
                <div className="flex">
                  <div className="flex flex-row gap-2.5 items-center justify-start ">
                    {data.tags && Object.values(data.tags).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] rounded-[10px] my-3 py-1 px-2 bg-[#F4F6F8] text-[#858EAD] cursor-pointer hover:bg-light3 dark:hover:bg-dark4"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between items-start">
                <div className="flex flex-col gap-2">
                  <p className="font-normal text-xs text-[#97989D] dark:text-white">
                    Views
                  </p>
                  <p className="font-bold text-[10px] text-[##3F4354] -mt-2">
                    {/* {data.views} */}
                    {getRandomNumber(500, 900000).toLocaleString()}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-normal text-xs text-[#97989D] dark:text-white">
                    Like
                  </p>
                  <p className="font-bold text-[10px] text-[##3F4354] -mt-2">
                    {/* {data.likes} */}
                    {getRandomNumber(1000, 300000).toLocaleString()}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-normal text-xs text-[#97989D] dark:text-white">
                    Comments
                  </p>
                  <p className="font-bold text-[10px] text-[##3F4354] -mt-2">
                    {/* {data.comments} */}
                    {getRandomNumber(10, 500).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-row">
          <button className=" text-[#347AE2] dark:text-white font-bold text-xs">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileRightSidebar;

