import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import images from '../assets';

const icons = [
  { src: images.home, src2: images.homedarkmode, alt: 'home', link: '/' },
  { src: images.calendar, src2: images.calendardarkmode, alt: 'calendar', link: '/' },
  { src: images.group, src2: images.groupdarkmode, alt: 'group', link: '/' },
  { src: images.podcast, src2: images.podcastdarkmode, alt: 'podcast', link: '/' },
  { src: images.interview, src2: images.interviewdarkmode, alt: 'interview', link: '/' },
];

interface FooterProps{
        theme:string|undefined;
}

function Footer({ theme }:FooterProps) {
  return (
    <div className="lg:hidden flex flex-row fixed bottom-0 items-center h-[68px] md:px-[40px] md:py-[25px] px-[14px] py-[15px] w-full gap-[30px] bg-white dark:bg-dark3">
      <div className="lg:hidden flex flex-row justify-between items-center   w-full">
        {icons.map((items, index) => (
          <Link href={items.link}>
            <Image key={index} src={theme === 'light' ? items.src : items.src2} alt={items.alt} className="cursor-pointer hover:bg-primary-orange hover:duration-1000 p-2 rounded-lg w-[40px] h-[40px]" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;
