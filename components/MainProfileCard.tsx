import Image from 'next/image';
import React from 'react';

function MainProfileCard() {
  return (
    <div>
      <div className="w-full h-64 relative">
        <Image
          src="https://images.pexels.com/photos/27372368/pexels-photo-27372368/free-photo-of-view-of-mountains-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/15968918/pexels-photo-15968918/free-photo-of-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover absolute z-10  left-0 right-0 bottom-0 mx-auto translate-y-1/2 ring-2 ring-white"
        />
      </div>
      <div className="mt-20 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold"> Udin Sedunia Akhirat</h1>
        <div className="flex gap-8">
          <div className="flex flex-col items-center">
            <div className="font-bold">456</div>
            <div className="text-sm text-slate-500">Posts</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="font-bold">4.2k</div>
            <div className="text-sm text-slate-500">followers</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="font-bold">1.2k</div>
            <div className="text-sm text-slate-500">following</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfileCard;
