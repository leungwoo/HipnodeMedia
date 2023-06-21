import Image from 'next/image';

import { popularInfo } from '../utils/PopularInfo';

interface PopularProps {
    theme: string;
}

function Popular({ theme }: PopularProps) {
  return (
    <div className="hidden md:flex flex-col w-[210px] max-h-[338px] bg-white rounded-2xl justify-center dark:bg-dark3">
      <p className="font-semibold text-base text-darkGray dark:text-white mt-5 ml-5 mb-5">Popular Tags</p>
      <div className="flex flex-col justify-between max-h-[254px] ml-4 mr-[15px] mb-4 gap-y-2">
        {popularInfo.map((item, index) => (
          <div key={index} className="flex flex-row gap-2.5 items-center justify-start rounded-lg cursor-pointer hover:bg-light3 dark:hover:bg-dark4">
            <div>
              <Image src={theme === 'light' ? item.icon : item.iconDark} alt="icon" className=" w-8 h-8 object-contain" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-xs text-slateGray dark:text-white">{item.title}</p>
              <p className="font-normal text-[10px] text-lightGray">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
