'use client';
import { acceptFollowRequest, declineFollowRequest } from '@/lib/actions';
import { FollowRequest, User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useOptimistic } from 'react';

type FollowRequestWithUser = FollowRequest & {
  sender: User;
};

const FollowRequestList = ({
  requests,
}: {
  requests: FollowRequestWithUser[];
}) => {
  const router = useRouter();
  const [optimisticRequests, updateOptimisticRequest] = useOptimistic(
    requests,
    (state: FollowRequestWithUser[], followRequestId) => {
      return state.filter((item) => item.id !== followRequestId);
    }
  );

  return (
    <div className="flex flex-col gap-4">
      {optimisticRequests.length ? (
        optimisticRequests.map((item) => (
          <div className="flex items-center justify-between" key={item.id}>
            <Link href={`profile/${item.sender.username}`}>
              <div className="flex gap-2 items-center  cursor-pointer">
                <Image
                  src={item.sender.avatar || '/images/noAvatar.png'}
                  alt=""
                  width={40}
                  height={40}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-semibold text-sm">
                  {item.sender.name && item.sender.surname
                    ? item.sender.name + ' ' + item.sender.surname
                    : item.sender.username}
                </span>
              </div>
            </Link>
            <div className="flex gap-4 items-center">
              <Image
                src="/images/accept.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
                onClick={async () => {
                  updateOptimisticRequest(item.id);
                  await acceptFollowRequest(item.sender.id);
                  router.refresh();
                }}
              />

              <Image
                src="/images/reject.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
                onClick={async () => {
                  try {
                    updateOptimisticRequest(item.id);
                    await declineFollowRequest(item.sender.id);
                    router.refresh();
                  } catch (error) {}
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="p-2 bg-slate-50 rounded-md text-slate-500 text-sm text-center">
          No friend request available
        </div>
      )}
    </div>
  );
};

export default FollowRequestList;
