import { User } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import UpdateUser from './UpdateUser';
import { auth } from '@clerk/nextjs/server';

type UserWithCount = User & {
  _count: {
    posts: number;
    followers: number;
    followings: number;
  };
};

function MainProfileCard({ user }: { user: UserWithCount }) {
  const { userId: currentUserId } = auth();

  return (
    <div>
      <div className="w-full h-64 relative">
        {/* cover image*/}
        <Image
          src={user.cover || '/images/noCover.jpg'}
          alt=""
          fill
          className="object-cover rounded-md"
        />
        {/* profile image */}
        <Image
          src={user.avatar || '/images/noAvatar.png'}
          alt=""
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover absolute z-10  left-0 right-0 bottom-0 mx-auto translate-y-1/2 ring-2 ring-white"
        />
      </div>
      <div className="mt-20 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">
            {user.name && user.surname
              ? `${user.name} ${user.surname}`
              : user.username}
          </h1>

          {user.id === currentUserId && <UpdateUser user={user} />}
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col items-center">
            <div className="font-bold">{user._count.posts}</div>
            <div className="text-sm text-slate-500">Posts</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="font-bold">{user._count.followers}</div>
            <div className="text-sm text-slate-500">followers</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="font-bold">{user._count.followings}</div>
            <div className="text-sm text-slate-500">following</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfileCard;
