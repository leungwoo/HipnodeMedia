import React from 'react';
import Image from 'next/image';

import images from '../../assets';


const listItems = [
  { icon: images.post2, title: 'Post', iconWidth: '14px', iconHeight: '14px', mt: '20px', ml: '20px' },
  { icon: images.calendar, title: 'Meetup', iconWidth: '14px', iconHeight: '14px', mt: '10px', ml: '20px' },
  { icon: images.podcasts2, title: 'Podcasts', iconWidth: '14px', iconHeight: '14px', mt: '10px', ml: '20px' },
  { icon: images.interviews, title: 'Interviews', iconWidth: '14px', iconHeight: '16px', mt: '10px', ml: '20px' },
];

function ListItem({ icon, title, iconWidth, iconHeight, mt, ml }: any) {
  return (
    <div className={`flex flex-row gap-3 text-sm cursor-pointer mt-[${mt}] ml-[${ml}]`}>
      <Image src={icon} alt="postimage" className={`w-[${iconWidth}] h-[${iconHeight}]`} /> {title}
    </div>
  );
}

function CreatePopUp({ closeButton }: any) {
  return (
    <div className="absolute -mt-[0px] -ml-[80px] md:-ml-[10px] w-full lg:max-w-sm">
      <div className="bg-[#f7f7f7] w-[150px] md:w-[150px] h-[200px] relative z-2 flex flex-col gap-4 ml-[10px]">
        {
          listItems.map((item) => (
            <ListItem
              icon={item.icon}
              title={item.title}
              iconWidth={item.iconWidth}
              iconHeight={item.iconHeight}
              mt={item.mt}
              ml={item.ml}
            />
          ))
        }
      </div>
    </div>
  );
}

export default CreatePopUp;
