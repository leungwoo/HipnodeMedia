'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import images from '../../assets';
import GroupProps from './GroupProps';
import SeeAllButton from './SeeAllButton';
import SelectGroupExtended from './SelectGroupExtended';

function ListItem({ color, icon, title, description }: any) {
  return (
    <div className={`cursor-pointer width-[190px] md:mb-4 bg-[${color}]`}>
      <div className="flex items-center gap-2 p-2 text-sm">
        <Image src={icon} alt="Icon" width={25} className="" />
        <span>
          {title}
          <div className="text-[#97989D] text-[10px] font-normal leading-4">
            {description}
          </div>
        </span>
      </div>
    </div>
  );
}

function SelectGroupPopUp() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSeeAllClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const listItems = [
    { color: '#FDF4EA', icon: images.growing, title: 'Fastest Growing', description: 'List updated daily at midnight PST.' },
    { color: '#fff', icon: images.Ellipse36, title: 'Looking for a partner up', description: 'Share how to succeed and w..' },
    { color: '#fff', icon: images.FastestGrowing2, title: 'Somebody Make This', description: 'IHers with product needs ca...' },
    { color: '#fff', icon: images.FastestGrowing3, title: 'Paid Virtual Coworking', description: 'Tips about how to start, run...' },
    { color: '#FFECE6', icon: images.fire, title: 'Most Popular', description: 'List updated daily at midnight PST.' },
    { color: '#fff', icon: images.MostPopular1, title: 'Building in Public', description: 'Hipdnode building their prod...' },
    { color: '#fff', icon: images.MostPopular2, title: 'Digital Nomads', description: 'Traveling while building your...' },
    { color: '#fff', icon: images.MostPopular3, title: 'Landing Page UIHUT', description: 'Share and receive tips for im...' },
    { color: '#7b95b9', icon: images.rocket, title: 'Newly Launched', description: 'List updated daily at midnight PST.' },
    { color: '#fff', icon: images.NewlyLaunched1, title: 'European Hipnoder', description: 'Everything related to the sta...' },
    { color: '#fff', icon: images.NewlyLaunched2, title: 'Browser Extension Ma...', description: 'All browser addon things. hi...' },
    { color: '#fff', icon: images.NewlyLaunched3, title: 'Ideas and Validation', description: 'Get help with defining, valida...' },
  ];

  return (
    <div className="absolute -ml-[105px] md:-ml-[175px] -mt-[0px]">
      <div className="absolute w-full lg:max-w-sm">
        <div className="bg-[#fff] border w-[300px] md:w-[690px] z-2 flex flex-col md:flex-row gap-1 md:gap-4 justify-between overflow-y-auto max-h-[400px] sm:max-h-auto">
          <div className="flex flex-col gap-x-0">
            {listItems.slice(0, 4).map((item, index) => (
              <ListItem
                key={index}
                color={item.color}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="flex flex-col gap-x-0">
            {listItems.slice(4, 8).map((item, index) => (
              <ListItem
                key={index}
                color={item.color}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="flex flex-col gap-x-0">
            {listItems.slice(8).map((item, index) => (
              <ListItem
                key={index}
                color={item.color}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <SeeAllButton />
      {isPopupOpen && (
        <div className="popup">
          <SelectGroupExtended />
          <button type="button" onClick={handlePopupClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default SelectGroupPopUp;
