import { StaticImageData } from 'next/image';

import images from '../assets';

export interface Meetups {
    date:string;
    icon: StaticImageData;
    title: string;
    location: string;
    tags: string[];
  }

export const MeetupsInfo: Meetups[] = [
  {
    date: 'Feb 7',
    icon: images.meetupsimage1,
    title: 'UIHUT - Crunchbase Company Profile...',
    location: ' UIHUT  •  Sylhet, Bangladesh',
    tags: ['Remote', 'Part-time', 'Worldwide'],
  },
  {
    date: 'Feb 3',
    icon: images.meetupsimage2,
    title: 'Design Meetups USA | Dribbble',
    location: 'Dribbble  •  Austin, Texas, USA',
    tags: ['Remote', 'Part-time'],
  },
  {
    date: 'Feb 5',
    icon: images.meetupsimage3,
    title: 'Meetup Brand Identity Design - Beha...',
    location: 'Behance  •  Sab jose, Califonia, USA',
    tags: ['FullTime', 'Contract', 'Worldwide'],
  },
];

