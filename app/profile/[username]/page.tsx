import Feed from '@/components/Feed';
import Leftbar from '@/components/leftbar/Leftbar';
import MainProfileCard from '@/components/MainProfileCard';
import Rightbar from '@/components/Rightbar';
import React from 'react';

function ProfilePage() {
  return (
    <div className="pt-6 flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <Leftbar type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <MainProfileCard />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <Rightbar userId="test" />
      </div>
    </div>
  );
}

export default ProfilePage;
