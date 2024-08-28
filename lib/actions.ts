'use server';

import { auth } from '@clerk/nextjs/server';
import prisma from './client';

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error('User is not authenticated!');

  try {
    // check if currentUser has followed this account
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    // unfollow if currentUser already follow this account
    if (existingFollow) {
      return await prisma.follow.delete({
        where: {
          id: existingFollow.id,
        },
      });
    }

    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: userId,
      },
    });

    // cancel followRequest if followRequest exist
    if (existingFollowRequest) {
      return await prisma.followRequest.delete({
        where: { id: existingFollowRequest.id },
      });
    }

    // if the user has not followed and has not sent the followRequest, create followRequest
    if (!existingFollow && !existingFollowRequest) {
      return await prisma.followRequest.create({
        data: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong! :(');
  }
};
