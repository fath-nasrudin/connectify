import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Ad({ size }: { size: 'sm' | 'md' | 'lg' }) {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md  flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Sponsored Ads</span>
      </div>

      {/* content */}
      <div
        className={`flex flex-col ${
          size === 'sm' ? 'gap-2' : 'gap-4'
        } text-sm text-slate-500`}
      >
        {/* Image */}
        <div
          className={`relative w-full h-36 ${
            size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        {/* Account */}
        <Link href="/">
          <div className="flex gap-2 items-center  cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
              height={48}
              width={48}
              className="object-cover w-8 h-8 rounded-full"
            />
            <span className="flex-1 font-semibold text-blue-500">
              Big Burger
            </span>
          </div>
        </Link>
        {/* Desc */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem
          nemo reprehenderit alias veritatis
        </p>
        {/* Link */}
        <Link
          href="/"
          className="bg-slate-300 font-semibold p-2 rounded-md text-center text-xs"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Ad;
