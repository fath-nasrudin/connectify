import Image from 'next/image';

function Comments() {
  return (
    <div className="flex flex-col gap-4">
      {/* Write section */}
      <div className="flex gap-4">
        {/* profile */}
        <Image
          src="https://images.pexels.com/photos/27383282/pexels-photo-27383282/free-photo-of-brunette-in-corduroy-pants.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-6 h-6 rounded-full"
        />

        {/* text */}
        <div className="flex-1 px-2 py-1 bg-slate-100 rounded-md flex gap-2 items-center">
          <input
            type="text"
            placeholder="write a comment"
            className="flex-1 bg-transparent outline-none"
          />
          <Image
            src="/images/emojismile.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Comment list section */}
      <div>
        <div className="flex gap-2 items-start">
          {/* avatar */}
          <Image
            src="https://images.pexels.com/photos/27383282/pexels-photo-27383282/free-photo-of-brunette-in-corduroy-pants.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full cursor-pointer"
          />
          {/* text and interactions */}
          <div className="flex-1">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos
              quos atque saepe neque similique velit odio, doloremque error
              minus iusto exercitationem autem, maiores totam. Placeat incidunt
              dolorem beatae dolorum!
            </div>
            <div className="text-xs text-gray-500 flex gap-4 items-center">
              {/* likes */}
              <div className="px-4 py-1 bg-slate-50 rounded-xl flex items-center gap-2">
                <Image
                  src={'/images/like.png'}
                  width={12}
                  height={12}
                  alt=""
                  className=" cursor-pointer"
                />
                <span className="text-slate-300">|</span>
                <span>
                  123 <span className="">Likes</span>
                </span>
              </div>
              {/* reply */}
              <div className="px-4 py-1 bg-slate-50 rounded-xl cursor-pointer">
                reply
              </div>
            </div>
          </div>
          {/* more button */}
          <Image
            src="/images/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Comments;
