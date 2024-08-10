import Image from 'next/image';

function StoryItem() {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <Image
        width={80}
        height={80}
        src={
          'https://images.pexels.com/photos/27586893/pexels-photo-27586893/free-photo-of-station.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
        }
        alt="profile image"
        className="w-20 h-20 rounded-full border border-blue-600 object-cover"
      />
      <span className="w-20 overflow-hidden text-ellipsis font-semibold">
        Username
      </span>
    </div>
  );
}

function Stories() {
  return (
    <div className="rounded-lg bg-white shadow-md overflow-x-scroll no-scrollbar text-sm">
      <div className="p-4 flex gap-6">
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </div>
    </div>
  );
}

export default Stories;
