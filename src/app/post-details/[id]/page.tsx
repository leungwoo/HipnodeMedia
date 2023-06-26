'use client';

import React, { useState, useEffect } from 'react';
import {
  PostDetails,
  Loading,
  ActionBar,
  RightPost,
} from '../../../components';

interface Props {
  params: {
    id: string;
  };
}

async function fetchPostContents(id: string) {
  const res = await fetch(`https://hipnode-media.vercel.app/api/post/${id}`);

  const post = await res.json();
  return post;
}

function PostDetailsPage({ params: { id } }: Props) {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const postContents = await fetchPostContents(id);
      setPost(postContents);
    }

    fetchData();
  }, [id]);

  if (!post) {
    return <Loading />;
  }



  return (
    <div className="flex flex-col md:flex-row items-start justify-center w-full grow bg-layoutBackground dark:bg-dark2 px-5 md:px-10 py-5 gap-5 pb-20">
      <ActionBar likeCount={post.likes?.length ?? 0} />
      <PostDetails post={post} />
      <RightPost post={post} />
    </div>
  );
}

export default PostDetailsPage;
