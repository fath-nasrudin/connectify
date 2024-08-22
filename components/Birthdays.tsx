import { GiftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Birthdays() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Birthdays</span>
      </div>

      {/* Today birthday list */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex gap-2 items-center  cursor-pointer">
              <Image
                src="https://images.pexels.com/photos/27791648/pexels-photo-27791648/free-photo-of-snowboard-saklikent-antalya.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                width={40}
                height={40}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold text-sm">Layla Hear</span>
            </div>
          </Link>

          <button className="py-1 px-2 bg-blue-500 text-white rounded-md text-xs">
            Celebrate
          </button>
        </div>

        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex gap-2 items-center  cursor-pointer">
              <Image
                src="https://images.pexels.com/photos/27791648/pexels-photo-27791648/free-photo-of-snowboard-saklikent-antalya.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                width={40}
                height={40}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold text-sm">Layla Hear</span>
            </div>
          </Link>

          <button className="py-1 px-2 bg-blue-500 text-white rounded-md text-xs">
            Celebrate
          </button>
        </div>
      </div>

      {/* See Upcoming birthday*/}
      <Link href="/">
        <div className="p-4 text-slate-500 bg-slate-100 rounded-md flex gap-2 items-center">
          <GiftIcon size={32} />
          <div className="text-xs">
            <span className="font-semibold text-slate-700">
              Upcoming Birthdays
            </span>
            <p>See other 16 have upcoming birthdays</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Birthdays;
