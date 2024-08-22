import Image from 'next/image';
import Link from 'next/link';

function FriendRequests() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Friend Request</span>
        <Link href="/">
          <span className="text-xs text-blue-500 cursor-pointer">See all</span>
        </Link>
      </div>
      {/* Request list */}
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
              <span className="font-semibold text-sm">Layla Majnoon</span>
            </div>
          </Link>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/accept.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <Image
              src="/images/reject.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
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
              <span className="font-semibold text-sm">Layla Majnoon</span>
            </div>
          </Link>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/accept.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <Image
              src="/images/reject.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
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
              <span className="font-semibold text-sm">Layla Majnoon</span>
            </div>
          </Link>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/accept.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <Image
              src="/images/reject.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendRequests;
