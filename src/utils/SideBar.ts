import { StaticImageData } from 'next/image';

import images from '../assets';

export interface SidebarItem {
    icon: StaticImageData;
    title: string;
    mobileTitle: string;
    subtitle: string;
    follows?: number;
  }

export const sidebarInfo: SidebarItem[] = [
  {
    icon: images.newmessage,
    title: 'Newest and Recent',
    mobileTitle: 'Newest',
    subtitle: 'Find the latest update',
  },
  {
    icon: images.popular,
    title: 'Popular of the day',
    mobileTitle: 'Popular',
    subtitle: 'Shots featured today by curators',
  },
  {
    icon: images.follow,
    title: 'Following',
    mobileTitle: 'Following',
    subtitle: 'Explore from your favorite person',
    follows: 5,
  },
];

