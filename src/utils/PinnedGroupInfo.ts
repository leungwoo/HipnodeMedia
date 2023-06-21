import { StaticImageData } from 'next/image';

import images from '../assets';

export interface PinnedGroupInfo {
    icon:StaticImageData;
    title:string;
    subtitle:string
}

export const pinnedGroupInfo:PinnedGroupInfo[] = [
  {
    icon: images.pinnedicon1,
    title: '#javascript',
    subtitle: '82,645 Posted by this tag',
  },
  {
    icon: images.pinnedicon2,
    title: '#bitcoin',
    subtitle: '65,523 Posted • Trending',
  },
  {
    icon: images.pinnedicon3,
    title: '#design',
    subtitle: '51,354 • Trending in Bangladesh',
  },
  {
    icon: images.pinnedicon4,
    title: '#blogging',
    subtitle: '48,029 Posted by this tag',
  },
  {
    icon: images.pinnedicon5,
    title: '#tutorial',
    subtitle: '51,354 • Trending in Bangladesh',
  },

];
