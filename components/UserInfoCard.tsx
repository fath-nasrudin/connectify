import { User } from '@prisma/client';
import {
  BriefcaseBusinessIcon,
  Calendar,
  GraduationCapIcon,
  LinkIcon,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function UserInfoCard({ user }: { user: User }) {
  // format joined date
  const createdAtDate = new Date(user.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="p-4 rounded-lg bg-white shadow-md text-sm flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">User Information</span>
        <Link href="/">
          <span className="text-blue-500  font-semibold text-xs">See all</span>
        </Link>
      </div>

      {/* Content */}
      <div className="text-slate-500 flex flex-col gap-4">
        {/* name */}
        <div className="">
          {/* Display Name */}
          <span className="text-lg text-black font-semibold">
            {user.name && user.surname
              ? `${user.name} ${user.surname}`
              : user.username}
          </span>
          {/* Username */}
          <span className="text-sm">{` @${user.username}`}</span>
        </div>

        {/* Bio */}
        {user.bio && <div>{user.bio}</div>}

        {/* About */}
        <div className="flex flex-col gap-2">
          {/* live */}
          {user.city && (
            <div className="flex gap-2 items-center">
              <MapPin size={'16'} />
              <span>
                Living in <strong>{user.city}</strong>
              </span>
            </div>
          )}

          {/* school */}
          {user.school && (
            <div className="flex gap-2 items-center">
              <GraduationCapIcon size={'16'} />
              <span>
                Went to <strong>{user.school}</strong>
              </span>
            </div>
          )}

          {/* work */}
          {user.work && (
            <div className="flex gap-2 items-center">
              <BriefcaseBusinessIcon size={'16'} />
              <span>
                Works at <strong>{user.work}</strong>
              </span>
            </div>
          )}

          {/* website link and joined date */}
          <div className="flex gap-2 flex-wrap justify-between">
            {user.website && (
              <Link href={user.website} target="_blank">
                <div className="flex gap-2 items-center">
                  <LinkIcon size={'16'} />
                  <span className="text-blue-500">{user.website}</span>
                </div>
              </Link>
            )}
            <div className="flex gap-2 items-center">
              <Calendar size={'16'} />
              <span>Joined {formattedDate}</span>
            </div>
          </div>
        </div>

        {/* Interactions */}
        <div className="flex flex-col gap-2">
          <button className="py-2 px-4 rounded-md text-center bg-blue-500 text-white font-semibold">
            Follow
          </button>
          <button className="self-end text-red-500">Block User</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
