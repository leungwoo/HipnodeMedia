'use client';

import React, { useState, lazy, Suspense } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import toast from 'react-hot-toast';
import Link from 'next/link';
import 'react-tagsinput/react-tagsinput.css';

const SetCoverButton = lazy(() => import('../../components/SetCoverButton'));
import images from '../../assets';

const createPost = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    post_image: '',
    post_tags: [] as string[],
  });

  const [imageSelected, setImageSelected] = useState();
  const [setCoverButtonKey, setSetCoverButtonKey] = useState(0);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'post_tags') {
      const tags = value.split(',').map((tag: any) => tag.trim());
      setFormData((prevState) => ({
        ...prevState,
        [name]: tags,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const uploadImage = async () => {
    if (!imageSelected) {
      return null;
    }
    const formImage = new FormData();
    formImage.append('file', imageSelected);
    formImage.append('upload_preset', 'Hipnode');
    formImage.append('public_id', `Hipnode${(imageSelected as any).name}`);
    formImage.append('collection', 'Hipnode');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dopkpyups/image/upload',
        formImage
      );
      return response.data.url;
    } catch (error) {
      toast.error(`Error uploading image: ${error}`);
      return null;
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let imageUrl = null;
    if (imageSelected) {
      imageUrl = await uploadImage();
      if (!imageUrl) {
        toast.error('Image upload failed');
        return;
      }
    }

    try {
      const response = await axios.post('/api/post', {
        ...formData,
        post_image: imageUrl,
        post_tags: formData.post_tags,
      });
      console.log('Response:', response);
      setFormData({
        title: '',
        content: '',
        post_image: '',
        post_tags: [],
      });
      setImageSelected(null as any);

      setSetCoverButtonKey((prevKey) => prevKey + 1);

      toast.success('Post Successfully Created');
    } catch (error) {
      toast.error('Failed to Create Post, make sure you are logged in');
    }
  };

  return (
    <form
      className="grow bg-[#F7F7F7] dark:bg-dark2 pt-5 px-5 md:p-8 pb-[70px]"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="w-[335px] md:w-2/3 mx-auto rounded-lg bg-[#FFFFFF] dark:bg-dark3 p-5 font-bold flex flex-col">
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title..."
          value={formData.title}
          className="bg-[#F7F7F7] dark:border dark:border-light2 dark:border-opacity-25 dark:bg-dark4 border border-[#2C353D] border-opacity-25 rounded-lg w-full  px-[20px] mb-5 h-[48px] md:h-[60px] md:text-[26px]"
          onChange={handleChange}
          required
        />
        <Suspense fallback={<div>Loading...</div>}>
          <div className=" flex w-full flex-row justify-between max-w-lg items-center">
            <SetCoverButton
              key={setCoverButtonKey}
              setImageSelected={setImageSelected}
              theme={theme}
            />
          </div>
        </Suspense>
        <div className="bg-[#F7F7F7] flex flex-col w-full dark:bg-dark4 p-1 rounded-lg mt-[35px] mb-[20px] max-h-[376px]">
          <div className="flex flex-row items-center justify-between md:justify-start pl-[22px] md:py-[20px] py-[15px] space-x-[30px]">
            <div className="text-[#347AE2] hover:text-[#5D95E8] gap-2 p-1 cursor-pointer items-center md:text-base text-sm">
              <Image
                src={images.Write}
                alt="coverimage"
                width={30}
                height={30}
                className="hidden md:inline-block  object-contain h-5 w-5"
              />{' '}
              Write
            </div>
            <div className="flex flex-row text-darkGray dark:text-lightGray hover:text-[#5D95E8] gap-2 p-1 cursor-pointer hover:cursor-not-allowed items-center md:text-base text-sm">
              <Image
                src={images.view}
                alt="coverimage"
                width={30}
                height={10}
                className="hidden md:inline-block  object-contain h-4 w-4"
              />{' '}
              Preview
            </div>
            <p className=" hover:text-[#5D95E8] text-darkGray dark:text-lightGray p-1 cursor-pointer hover:cursor-not-allowed md:text-base text-sm">
              Code of Conduct
            </p>
          </div>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            className="flex w-full max-h-[222px] md:max-h-[250px] flex-col font-normal pl-[10px] pt-[10px] bg-[#FFFFFF] dark:bg-dark3"
            placeholder="Tell your story..."
            onChange={handleChange}
            required
            rows={40}
          />
        </div>

        <p className="mb-[10px] text-xs md:text-sm font-semibold text-darkGray dark:text-light2 rounded-lg">
          Add or change tags using commas (up to 5) so readers know what your
          story is about
        </p>
        <input
          type="text"
          id="post_tags"
          name="post_tags"
          placeholder="Tag1, Tag2, Tag3"
          value={formData.post_tags.join(', ')}
          onChange={handleChange}
          className="mb-[20px] border-2 dark:border-light2 dark:border-opacity-25 dark:bg-dark3 w-full p-3 dark:border border-[#2C353D] border-opacity-25 rounded-lg font-normal"
        />
        <div className="flex flex-row items-center  gap-4">
          <button
            type="submit"
            disabled={!formData}
            className="w-[132px] bg-[#347AE2] hover:bg-[#1d66d4] text-[#EBF2FC] py-[10px] px-[40px] rounded"
          >
            Publish
          </button>
          <Link href={'/'} className="text-[#97989D] hover:text-[#7b7b80]">
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
};

export default createPost;
