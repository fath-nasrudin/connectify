import React from 'react';
import FriendRequests from './FriendRequests';
import Birthdays from './Birthdays';
import Ad from './Ad';
import UserInfoCard from './UserInfoCard';

function Rightbar({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? <UserInfoCard userId={userId} /> : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}

export default Rightbar;
