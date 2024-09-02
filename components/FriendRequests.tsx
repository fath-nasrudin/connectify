import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import FollowRequestList from './FollowRequestList';

async function FriendRequests() {
  const { userId: currentUserId } = auth();
  if (!currentUserId) return null;

  const friendRequestList = await prisma.followRequest.findMany({
    where: {
      receiverId: currentUserId,
    },
    include: {
      sender: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
    take: 3,
  });

  // dont render if there are no friend request
  if (!friendRequestList.length) return null;

  return (
    <div className="p-4 rounded-lg bg-white shadow-md flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Friend Request</span>
        <Link href="/">
          <span className="text-xs text-blue-500 cursor-pointer">See all</span>
        </Link>
      </div>
      {/* Request list */}
      <FollowRequestList requests={friendRequestList} />
    </div>
  );
}

export default FriendRequests;
