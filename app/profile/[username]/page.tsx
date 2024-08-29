import Feed from '@/components/Feed';
import Leftbar from '@/components/leftbar/Leftbar';
import MainProfileCard from '@/components/MainProfileCard';
import Rightbar from '@/components/Rightbar';
import prisma from '@/lib/client';
import { notFound } from 'next/navigation';
import React from 'react';

async function ProfilePage({ params }: { params: { username: string } }) {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: { username },
    include: {
      _count: {
        select: {
          posts: true,
          followers: true,
          followings: true,
        },
      },
    },
  });

  if (!user) return notFound();
  return (
    <div className="pt-6 flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <Leftbar type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <MainProfileCard user={user} />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <Rightbar user={user} />
      </div>
    </div>
  );
}

export default ProfilePage;
