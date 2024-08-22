import {
  BriefcaseBusinessIcon,
  Calendar,
  GraduationCapIcon,
  LinkIcon,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function UserInfoCard({ userId }: { userId: string }) {
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
        <div>
          {/* Display Name */}
          <span className="text-lg text-black font-semibold">Udin Sedunia</span>
          {/* Username */}
          <span className="text-sm"> @udin1dunia</span>
        </div>

        {/* Bio */}
        <div>
          Warga dunia. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda, enim!
        </div>

        {/* About */}
        <div className="flex flex-col gap-2">
          {/* live */}
          <div className="flex gap-2 items-center">
            <MapPin size={'16'} />
            <span>
              Living in <strong>Denmark</strong>
            </span>
          </div>
          {/* school */}
          <div className="flex gap-2 items-center">
            <GraduationCapIcon size={'16'} />
            <span>
              Went to <strong>Boston High School</strong>
            </span>
          </div>
          {/* work */}
          <div className="flex gap-2 items-center">
            <BriefcaseBusinessIcon size={'16'} />
            <span>
              Works at <strong>Meta Corp.</strong>
            </span>
          </div>

          {/* website link and joined date */}
          <div className="flex gap-2 flex-wrap justify-between">
            <Link href="https://google.com" target="_blank">
              <div className="flex gap-2 items-center">
                <LinkIcon size={'16'} />
                <span className="text-blue-500">google.com</span>
              </div>
            </Link>
            <div className="flex gap-2 items-center">
              <Calendar size={'16'} />
              <span>Joined January 2021</span>
            </div>
          </div>
        </div>

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
