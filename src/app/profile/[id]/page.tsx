'use client';

import { useState, useEffect } from 'react';
import Profile from '../../../components/Profile';

function ProfilePage(context: any) {
  const userID = context.params.id;
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState<any>();
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
  const [isPostLoading, setIsPostLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setIsUserLoading(true);
        const response = await fetch(`/api/user/${userID}`);
        const data = await response.json();
        setUserData(data);
        setIsUserLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    async function fetchUserPosts() {
      try {
        setIsPostLoading(true);
        const response = await fetch(
          `/api/post/?userId=${userID}&page=${currentPage}`
        );
        const data = await response.json();
        setIsPostLoading(false);
        setUserPosts(data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    }

    fetchUserData();
    fetchUserPosts();
  }, [userID, currentPage]);

  if (!userData || !userPosts) return null;

  return (
    <Profile
      userData={userData}
      posts={userPosts.posts}
      postsLoading={isPostLoading}
      userLoading={isUserLoading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={userPosts.totalPages}
      externalProfile={true}
    />
  );
}
export default ProfilePage;
