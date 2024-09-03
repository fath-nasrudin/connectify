import Image from 'next/image';
import React from 'react';
import Comments from './Comments';
import { Post, User } from '@prisma/client';
import Link from 'next/link';
import PostInteraction from './PostInteraction';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/client';

export type PostWithDetail = Post & {
  user: User;
  _count: {
    likes: number;
    comments: number;
  };
};

async function PostComponent({ post }: { post: PostWithDetail }) {
  const { userId: currentUserId } = auth();

  let isLiked = false;
  if (currentUserId) {
    const likeExist = await prisma.like.findFirst({
      where: {
        userId: currentUserId,
      },
    });

    if (likeExist) isLiked = true;
  }

  return (
    <div className="flex flex-col gap-4 border-b-2 border-slate-300 py-8">
      {/* User */}
      <Link
        href={`/profile/${post.user.username}`}
        className="flex gap-2 items-center"
      >
        <Image
          width={80}
          height={80}
          src={post.user.avatar || '/images/noAvatar.png'}
          alt="profile image"
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="font-medium">
          {post.user.name && post.user.surname
            ? post.user.name + ' ' + post.user.surname
            : '@' + post.user.username}
        </span>
      </Link>
      {/* Post Content */}
      <div className="flex flex-col gap-4">
        {/* Image container */}
        {/* <div className="w-full overflow-hidden min-h-96 relative rounded-md">
          <Image
            fill
            src={
              'https://images.pexels.com/photos/27586893/pexels-photo-27586893/free-photo-of-station.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            }
            alt="profile image"
            className="w-full h-auto block object-cover"
          />
        </div> */}
        {/* Text */}
        <p>{post.content}</p>
      </div>
      {/* Interaction buttons */}
      <PostInteraction post={post} />
      <hr className="mx-4" />
      {/* Comments */}
      <Comments />
    </div>
  );
}

export default PostComponent;
