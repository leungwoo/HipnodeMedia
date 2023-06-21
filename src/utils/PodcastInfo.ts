import { StaticImageData } from 'next/image';

import images from '../assets';

export interface PodcastInfo {
    icon:StaticImageData;
    title:string;
    author:string
}

export const podcastInfo:PodcastInfo[] = [
  {
    icon: images.podcastimg1,
    title: 'Selling a Business and Scaling Another Amidst Tragedy.',
    author: 'by Michele Hansen',
  },
  {
    icon: images.podcastimg2,
    title: 'Mental health as a founder and the importance of community...',
    author: 'by James McKinven',
  },
  {
    icon: images.podcastimg3,
    title: 'Growing to $8.5k MRR in 1 year - Marie Martens, Tally.so',
    author: 'by Mahfuzul Nabil',
  },
  {
    icon: images.podcastimg4,
    title: 'Mental Health and Bootstrapping in 2022 with Rob Walling of TinySe',
    author: 'by Dr. Jubed',
  },
  {
    icon: images.podcastimg5,
    title: 'Money, Happiness, and Productivity as a Solo Founder with Pieter Levels',
    author: 'by Jesse Hanley',
  },
  {
    icon: images.podcastimg6,
    title: 'Mental health as a founder and the importance of community',
    author: 'by Courtland Allen',
  },

];
