import React from 'react';
import Post from './Post';
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';

async function Feed({ targetUserId }: { targetUserId?: string }) {
  const { userId: currentUserId } = auth();

  let posts;

  if (targetUserId) {
    posts = await prisma.post.findMany({
      where: {
        userId: targetUserId,
      },
      include: {
        user: true,
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
    });
  }
  // get only posts of targetUser
  else if (currentUserId) {
    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: (
            await prisma.follow.findMany({
              where: {
                followerId: currentUserId,
              },
              select: {
                followingId: true,
              },
            })
          ).map((follow) => follow.followingId),
        },
      },
      include: {
        user: true,
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
    });
  } else {
    posts = await prisma.post.findMany({
      include: {
        user: true,
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
    });
  }

  return (
    <div className="p-4 rounded-lg bg-white shadow-md flex flex-col">
      {posts.length
        ? posts.map((postItem) => <Post key={postItem.id} post={postItem} />)
        : 'No post available'}
    </div>
  );
}

export default Feed;
