/* eslint-disable no-use-before-define */

import { ISODateString } from 'next-auth/core/types';

// Define types here
export interface IUser {
    // _id: Types.ObjectId;
    name: string;
    display_name: string;
    profile_photo: string;
    about: string;
    provider_id: string;
    email: string;
    groups_owned: IGroup[];
    groups_joined: IGroup[];
    posts_made: IPost[];
    comment_made: IComment[];
    role: string;
    is_admin: boolean;
    followers: IUser[];
    following: IUser[];
    userUrl: string;
    social_media: {
        twitter: string;
        facebook: string;
        instagram: string;
    }[];
    points: number;
    created_at: () => Date;
}

export interface IGroup {
    // _id: Types.ObjectId;
    title: string;
    about: string;
    group_image: string;
    group_icon: string;
    popular_tags: string[];
    posts: IPost[];
    owner: IUser;
    admins: IUser[];
    members: IUser[];
    created_at: () => Date;
}
export interface IPost {
    // _id: Types.ObjectId;
    title: string;
    content: string;
    post_image: string;
    post_tags: string[];
    author: IUser;
    // parent_group:IGroup;
    // comments:IComment[];
    created_at: () => Date;
    likes: IUser[];
}

export interface INotification {
    description: string;
    forUser: IUser;
    fromUser: IUser;
    created_at: () => Date;
    type: 'follow' | 'comment' | 'unfollow' | 'like' | 'dislike';
}

export interface IComment {
    // _id: Types.ObjectId;
    post_id: string;
    parent_comment: IComment;
    author: IUser;
    parent_post: IPost;
    parent_Group: IGroup;
    content: string;
    created_at: () => Date;
}

export type SessionType = {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
    expires: ISODateString;
};
