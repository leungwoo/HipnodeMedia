/* eslint-disable camelcase */
import React from 'react';
import Image from 'next/image';

import DetailsPost from '../../components/PostDetails/PostDetails'; // import DetailsPost component
import Header from '../../components/Header';
import images from '../../assets';
// import styles from '../../../details.css';
import styles from './postDetails.module.css';

interface Props {
  post: {
    _id: string;
    title: string;
    content: string;
    post_image: string;
  } | null;
}

function PostDetail({ post }: Props) {
  if (!post) {
    return <div>Post Not Found</div>;
  }

  const { title, content, post_image } = post;

  return (
    // <div className={styles.container}>
    //   <div className={styles.imageContainer}>
    //     <Image src={post_image} alt="ContentImage" width={785} height={273} className="object-contain" />
    //   </div>
    //   <div className={styles.center}>
    //     <h1 className={styles.title}>{title}</h1>
    //     <p className={styles.p}>{content}</p>
    //   </div>
    // </div>
    // <div className="flex justify-between mx-[30px]">
    //   <div className="ml-[120px] mr-10 flex flex-col">

    //     <div className="h-210 w-300 rounded-lg p-6 pr-10 bg-[#262D34] inline-flex flex-col justify-between gap-y-4 my-[15px]">
    //       <div className="flex items-center space-x-2 flex-1">
    //         <Image src={images.LikeIcon} alt="icon" className="w-[28px] h-[28px] object-contain" />
    //         <span className="text-white font-source-sans-pro font-medium text-base leading-6 tracking-normal text-left flex-1">24,506 Hearts</span>
    //       </div>
    //       <div className="flex items-center space-x-2 flex-1">
    //         <Image src={images.CommentIcon} alt="icon" className="w-[28px] h-[28px] object-contain" />
    //         <span className="text-white font-source-sans-pro font-medium text-base leading-6 tracking-normal text-left flex-1">3,086 Comments</span>
    //       </div>
    //       <div className="flex items-center space-x-2 flex-1">
    //         <Image src={images.ShareIcon} alt="icon" className="w-[28px] h-[28px] object-contain" />
    //         <span className="text-white font-source-sans-pro font-medium text-base leading-6 tracking-normal text-left flex-1">84 Shares</span>
    //       </div>
    //       <div className="flex items-center space-x-2 flex-1">
    //         <Image src={images.ReportIcon} alt="icon" className="w-[28px] h-[28px] object-contain" />
    //         <span className="text-white font-source-sans-pro font-medium text-base leading-6 tracking-normal text-left flex-1">Report</span>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mr-10">
    //     <div className="bg-[#262D34] w-[785px] h-[797px] flex justify-center mx-[30px] mb-[30px] mt-[15px]">
    //       <div className="flex flex-col items-center space-x-2">
    //         <Image src={post_image} alt="icon" width={785} height={797} className="w-[785px] h-[273px] object-contain" />
    //         <h1 className="text-white font-source-sans-pro text-2xl font-semibold leading-10 tracking-normal text-left">Title: {title}</h1>
    //         <p className="text-[#97989D] font-source-sans-pro text-base font-normal leading-6 tracking-normal text-left">Content: {content}</p>
    //       </div>
    //     </div>
    //   </div>

    <div className="mx-auto text-center">
      {/* <Header /> */}
      <img src={post_image} width="785px" height="273px" alt="ContentImage" className="mx-auto" />
      <h1 className="mt-4">Title: {title}</h1>
      <p className="mt-2">Content: {content}</p>
      {/* <DetailsPost post={post} /> */}

    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  try {
    // Using pages/api/post/[postId.ts]
    const res = await fetch(`http://localhost:3000/api/post/${id}`);
    const post = await res.json();

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        post: null,
      },
    };
  }
}
export default PostDetail;
