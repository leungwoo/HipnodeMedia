import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { MeetupsInfo } from '../utils/Meetups';
import images from '../assets';

interface MeetupsProps {
    theme: string;
}

function InterviewBox({ theme }: MeetupsProps) {
  return (
    <div className="flex flex-col md:w-[325px] h-[165px] w-[335px] bg-[#FF7C4D] dark:bg-[#FF7C4D] rounded-2xl">
      <div className="flex flex-col justify-between max-h-[254px] ml-4 mr-[15px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col mt-5">
            <h1 className="text-lg text-white font-semibold">Share a Post</h1>
            <p className="text-xs font-normal text-white">Working on something interesting? We'd love to hear about it!</p>
          </div>
          <div className="flex gap-2 justify-around items-center">
            <Link href="/create-post" className="flex flex-row items-center text-sm gap-x-2 bg-[#fff] dark:text-[#000] font-semibold py-2 px-4 rounded-lg">
              <p>Submit a Story</p>
            </Link>
            <button type="button" className="flex flex-row items-center text-sm gap-x-2 bg-[#ffffff69] text-white font-semibold py-2 px-4 rounded-lg hover:cursor-not-allowed">
              <p>Code of Conduct</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewBox;
