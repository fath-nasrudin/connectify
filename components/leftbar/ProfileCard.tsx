import Image from 'next/image';
import React from 'react';

function ProfileCard() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md text-sm">
      <div className="w-full h-20 relative">
        <Image
          src="https://images.pexels.com/photos/27372368/pexels-photo-27372368/free-photo-of-view-of-mountains-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/15968918/pexels-photo-15968918/free-photo-of-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover absolute z-10  left-0 right-0 bottom-0 mx-auto translate-y-1/2 ring-1 ring-white"
        />
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <h1 className="text-xl font-semibold">Udin Sedunia Akhirat</h1>
        <div className="flex flex-wrap gap-2 items-center">
          {/* followers profiles */}
          <div className="flex gap-1 items-center">
            <Image
              src="https://images.pexels.com/photos/15968918/pexels-photo-15968918/free-photo-of-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 rounded-full object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/15968918/pexels-photo-15968918/free-photo-of-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 rounded-full object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/15968918/pexels-photo-15968918/free-photo-of-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 rounded-full object-cover"
            />
          </div>
          <span className="text-sm text-slate-500">500 followers</span>
        </div>
        <button className="py-1 px-2 rounded-md bg-blue-500 text-white text-sm font-semibold">
          My Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
