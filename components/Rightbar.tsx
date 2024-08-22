import React from 'react';
import FriendRequests from './FriendRequests';
import Birthdays from './Birthdays';

function Rightbar({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
    </div>
  );
}

export default Rightbar;
