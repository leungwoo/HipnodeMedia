import { StaticImageData } from 'next/image';

import images from '../assets';

export interface PopularInfo {
    icon:StaticImageData;
    iconDark:StaticImageData;
    title:string;
    subtitle:string
}

export const popularInfo:PopularInfo[] = [
  {
    icon: images.javascript,
    iconDark: images.javascriptdark,
    title: '#javascript',
    subtitle: '82,645 Posted by this tag',
  },
  {
    icon: images.bitcoin,
    iconDark: images.bitcoindark,
    title: '#bitcoin',
    subtitle: '65,523 Posted • Trending',
  },
  {
    icon: images.design,
    iconDark: images.designdark,
    title: '#design',
    subtitle: '51,354 • Trending in Bangladesh',
  },
  {
    icon: images.blogging,
    iconDark: images.bloggingdark,
    title: '#blogging',
    subtitle: '48,029 Posted by this tag',
  },
  {
    icon: images.tutorial,
    iconDark: images.tutorialdark,
    title: '#tutorial',
    subtitle: '51,354 • Trending in Bangladesh',
  },
  {
    icon: images.seo,
    iconDark: images.seodark,
    title: '#seo',
    subtitle: '82,645 Posted by this tag',
  },
];
