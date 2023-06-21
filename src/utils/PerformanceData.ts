import { StaticImageData } from 'next/image';

import images from '../assets';

export interface PerformanceData {
    image:StaticImageData;
    avatar:StaticImageData;
    post?:string;
    tags?:{
        tag1:string;
        tag2:string;
        tag3:string;
    }
    views:string;
    likes:string;
    comments:string
}

export const PerformanceData:PerformanceData[] = [
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
    {
      image: images.post_img,
      avatar: images.Avatar,
      post:'Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...',
      tags: {
        tag1: 'Bitcoin',
        tag2: 'Ethereum',
        tag3: 'Crypto',
      },
      views: '651,324',
      likes: '36,6545',
      comments: '56',
    },
  ];