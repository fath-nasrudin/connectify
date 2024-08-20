import Image from 'next/image';

function AddPost() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md flex gap-4">
      {/* Editor */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-2">
          <textarea
            className="flex-1 p-2 rounded-lg bg-slate-100"
            placeholder="What's on your mind?"
          />
          <div className="self-end cursor-pointer">
            <Image
              src="/images/emojismile.png"
              width={24}
              height={24}
              alt="emoji options"
            />
          </div>
        </div>
        <div className="flex gap-x-6 gap-y-2 flex-wrap">
          <div className="flex gap-1 items-center cursor-pointer">
            <Image
              src={'/images/picture.png'}
              alt="no"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            Photo
          </div>

          <div className="flex gap-1 items-center cursor-pointer">
            <Image
              src={'/images/video.png'}
              alt="no"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            Video
          </div>

          <div className="flex gap-1 items-center cursor-pointer">
            <Image
              src={'/images/poll.png'}
              alt="no"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            Poll
          </div>

          <div className="flex gap-1 items-center cursor-pointer">
            <Image
              src={'/images/calendar.png'}
              alt="no"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            Event
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
