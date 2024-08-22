import React from 'react';
import FriendRequests from './FriendRequests';

function Rightbar({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
    </div>
  );
}

export default Rightbar;
