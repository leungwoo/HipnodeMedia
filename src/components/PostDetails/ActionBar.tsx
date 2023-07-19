/* eslint-disable no-console */
'use client';
import { ActionItem } from '@/utils/Action';
import Image from 'next/image';
import React from 'react';
import {useRouter} from "next/navigation"
import axios, { Axios } from 'axios';
import { useState } from 'react';
import { Toast, toast } from 'react-hot-toast';

import images from '../../assets';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ActionBar({ likeCount, showAdmin, postId}: any) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const router = useRouter();

async function handleDelete(){
try{
    const response = await axios.delete(`/api/post/${postId}`);
    if(response.status !== 200){
        toast.error("Failed to Delete Post");
        return;
    }
    router.push("/")
    toast.success("Post Successfully Deleted")
}catch (error){
    toast.error('Failed to Delete Post');
}
}

  const actionInfo: ActionItem[] = [
    {
      icon: images.HeartClicked,
      title: likeCount + ' Hearts',
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
    ...(showAdmin ? [
        {
          icon: images.deleteicon,
          title: 'Delete',
          action: () => {
            setShowModal(true);;
          }
        },
        {
          icon: images.editicon,
          title: 'Edit',
          action: () => {
            router.push(`/post-details/${postId}/edit`);
          },
        }
      ] : []),
    ];


  return (
    <>
    <div className={`absolute top-0 left-0 w-full h-full bg-dark1 bg-opacity-50 z-10 ${!showModal && 'hidden'}`} id="modal">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col p-2 justify-center items-center w-[335px] h-[200px] bg-dark4 rounded-lg">
          <p className="text-lg font-bold">Are you sure you want to delete this post?</p>
          <div className="flex flex-row justify-center items-center gap-5 mt-5">
            <button
            onClick={() => {
              handleDelete();
              setShowModal(false);
            }}
            className="bg-primary-orange hover:bg-red-600 text-white px-3 py-1 rounded-lg">Yes</button>
            <button
            onClick={() => setShowModal(false)}
            className="bg-primary-yellow90 hover:bg-gray-600 text-white px-3 py-1 rounded-lg">No</button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col  justify-between md:items-start items-center  dark:bg-dark3 md:max-w-[210px]  w-[335px] h-fit mx-auto md:mx-0 p-[20px] bg-white rounded-[20px] order-1 md:order-0  ">
      {actionInfo.map((item, id) => (
        <div
          key={id}
          onClick={item?.action}
          className="flex flex-row justify-start items-center rounded-lg hover:bg-light3 dark:hover:bg-dark4 p-1 gap-2 w-full cursor-pointer"
        >
          <div className="flex bg-light3 dark:bg-dark4 rounded-lg w-[30px] h-[30px] items-center justify-center">
            <Image
              src={item.icon}
              alt="icon"
              className=" w-6 h-6 object-contain"
            />
          </div>
          <div className="flex-col">
            <div className="flex flex-row gap-1 items-center">
              <div className="relative flex flex-row gap-1">
                <p className="flex font-semibold text-xs hover:dark:text-white hover:text-darkNavy text-lightGray">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
}

export default ActionBar;
