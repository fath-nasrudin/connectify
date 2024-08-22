import Image from 'next/image';
import React from 'react';

function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex gap-2 items-center">
        <Image
          width={80}
          height={80}
          src={
            'https://images.pexels.com/photos/27586893/pexels-photo-27586893/free-photo-of-station.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
          }
          alt="profile image"
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="font-medium">Mambo Jumbo</span>
      </div>
      {/* Post Content */}
      <div className="flex flex-col gap-4">
        {/* Image container */}
        <div className="w-full overflow-hidden min-h-96 relative rounded-md">
          <Image
            fill
            src={
              'https://images.pexels.com/photos/27586893/pexels-photo-27586893/free-photo-of-station.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            }
            alt="profile image"
            className="w-full h-auto block object-cover"
          />
        </div>
        {/* Text */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          sapiente minima culpa sint et voluptatem facilis in cumque mollitia
          consequuntur. Neque odio minus, rem quas labore blanditiis commodi
          ipsam quisquam!
        </p>
      </div>
      {/* Interaction buttons */}
      <div className="flex gap-4">
        <div className="px-4 py-1 bg-slate-50 rounded-xl cursor-pointer flex items-center gap-2">
          <Image src={'/images/like.png'} width={16} height={16} alt="" />
          <span className="text-slate-300">|</span>
          <span className="text-slate-500">
            123 <span className="hidden md:inline">Likes</span>
          </span>
        </div>

        <div className="mr-auto px-4 py-1 bg-slate-50 rounded-xl cursor-pointer flex items-center gap-2">
          <Image src={'/images/comment.png'} width={16} height={16} alt="" />
          <span className="text-slate-300">|</span>
          <span className="text-slate-500">
            123 <span className="hidden md:inline">Comments</span>
          </span>
        </div>

        <div className="px-4 py-1 bg-slate-50 rounded-xl cursor-pointer flex items-center gap-2">
          <Image src={'/images/share.png'} width={16} height={16} alt="" />
          <span className="text-slate-300">|</span>
          <span className="text-slate-500">
            123 <span className="hidden md:inline">Shares</span>
          </span>
        </div>
      </div>
      {/* Comments */}
    </div>
  );
}

export default Post;
