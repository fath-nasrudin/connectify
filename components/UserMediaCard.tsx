import { User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function UserMediaCard({ user }: { user: User }) {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">User Media</span>
        <Link href="#">
          <span className="text-blue-500 font-semibold text-xs">See all</span>
        </Link>
      </div>

      {/* Content */}
      <div className="flex gap-2 flex-wrap mt-4">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default UserMediaCard;
