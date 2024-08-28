'use client';

import { switchFollow } from '@/lib/actions';
import { useOptimistic, useState } from 'react';

const FollowButton = ({
  userId,
  isFollowing,
  isFollowRequestSent,
}: {
  userId: string;
  isFollowing: boolean;
  isFollowRequestSent: boolean;
}) => {
  const [followState, setFollowState] = useState({
    isFollowing,
    isFollowRequestSent,
  });

  const [optimisticFollow, switchOptimisticFollow] = useOptimistic(
    followState,
    (state, action) => {
      return {
        // if the isFollowing true, change to false, if its false, keep false.
        isFollowing: state.isFollowing && false,
        // if true, change to false,
        // if false, if isFollowing false and isFollowRequestSentFalse, change to true
        isFollowRequestSent:
          !state.isFollowRequestSent && !state.isFollowing ? true : false,
      };
    }
  );

  const follow = async () => {
    switchOptimisticFollow(true);
    try {
      await switchFollow(userId);
      setFollowState((prev) => {
        return {
          isFollowing: prev.isFollowing && false,
          isFollowRequestSent:
            !prev.isFollowRequestSent && !prev.isFollowing ? true : false,
        };
      });
    } catch (error) {}
  };

  return (
    <form action={follow}>
      <button className="py-2 px-4 rounded-md text-center bg-blue-500 text-white font-semibold w-full">
        {optimisticFollow.isFollowing
          ? 'Following'
          : optimisticFollow.isFollowRequestSent
          ? 'Follow Request Sent'
          : 'Follow'}
      </button>
    </form>
  );
};

export default FollowButton;
