import React from 'react';
import Ad from '../Ad';
import Image from 'next/image';
import Link from 'next/link';

function ListMenu() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md text-sm flex flex-col gap-2">
      <Link
        href="#"
        className="p-1 rounded-md hover:bg-slate-200 flex gap-2 items-center "
      >
        <Image src="/images/calendar.png" alt="" width={24} height={24} />
        <span>Events</span>
      </Link>

      <Link
        href="#"
        className="p-1 rounded-md hover:bg-slate-200 flex gap-2 items-center "
      >
        <Image src="/images/blog.png" alt="" width={24} height={24} />
        <span>Posts</span>
      </Link>

      <Link
        href="#"
        className="p-1 rounded-md hover:bg-slate-200 flex gap-2 items-center "
      >
        <Image src="/images/gallery.png" alt="" width={24} height={24} />
        <span>Photos</span>
      </Link>

      <Link
        href="#"
        className="p-1 rounded-md hover:bg-slate-200 flex gap-2 items-center "
      >
        <Image src="/images/multimedia.png" alt="" width={24} height={24} />
        <span>Videos</span>
      </Link>

      <Link
        href="#"
        className="p-1 rounded-md hover:bg-slate-200 flex gap-2 items-center "
      >
        <Image
          src="/images/online-learning.png"
          alt=""
          width={24}
          height={24}
        />
        <span>Courses</span>
      </Link>

      <Link
        href="#"
        className="p-1 rounded-md hover:bg-slate-200 flex gap-2 items-center "
      >
        <Image src="/images/retailer.png" alt="" width={24} height={24} />
        <span>Marketplace</span>
      </Link>

      <Link
        href="#"
        className="p-1 rounded-md hover:bg-slate-200 flex gap-2 items-center "
      >
        <Image src="/images/cogwheel.png" alt="" width={24} height={24} />
        <span>Settings</span>
      </Link>
    </div>
  );
}

function Leftbar() {
  return (
    <div className="flex flex-col gap-6">
      <ListMenu />
      <Ad size="sm" />
    </div>
  );
}

export default Leftbar;
