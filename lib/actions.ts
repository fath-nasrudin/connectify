'use server';

import { auth } from '@clerk/nextjs/server';
import prisma from './client';
import { z } from 'zod';

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

export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) throw new Error('User is not authenticated!');

  try {
    const blockExist = await prisma.block.findFirst({
      where: {
        blockSenderId: currentUserId,
        blockReceiverId: userId,
      },
    });

    if (blockExist) {
      await prisma.block.delete({
        where: {
          id: blockExist.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockSenderId: currentUserId,
          blockReceiverId: userId,
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong! :(');
  }
};

export const updateUser = async (
  state: { success: boolean; error: boolean },
  formData: FormData
) => {
  const fields = Object.fromEntries(formData);

  const Profile = z.object({
    name: z.string().max(60).optional(),
    surname: z.string().max(60).optional(),
    bio: z.string().max(255).optional(),
    school: z.string().max(60).optional(),
    city: z.string().max(60).optional(),
    work: z.string().max(60).optional(),
    website: z.string().max(60).optional(),
  });

  const validatedFields = Profile.safeParse(fields);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    console.log(validatedFields.error);
    return {
      success: false,
      error: true,
    };
  }

  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    return {
      success: false,
      error: true,
    };
  }

  try {
    // write update to db
    const updatedProfile = await prisma.user.update({
      where: { id: currentUserId },
      data: validatedFields.data,
    });

    return {
      success: true,
      error: false,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: true,
    };
  }
};
