"use client";
import { StaticImageData } from 'next/image';

import images from '../assets';

export interface ActionItem {
    icon: StaticImageData;
    title: string;
    action?:()=>void
  }

export const actionInfo: ActionItem[] = [
  {
    icon: images.HeartClicked,
    title: '24,056 Heart',
  },
  {
    icon: images.Comment,
    title: '3086 Comments',
  },
  {
    icon: images.Share,
    title: '84 Share',
  },
  {
    icon: images.Report,
    title: 'Report',
  },
];

