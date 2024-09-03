import Image from 'next/image';
import { PostWithDetail } from './Post';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/client';
import { switchLike } from '@/lib/actions';
import PostLikeButton from './PostLikeButton';

const PostInteraction = async ({ post }: { post: PostWithDetail }) => {
  const { userId: currentUserId } = auth();

  let isLiked = false;
  if (currentUserId) {
    const likeExist = await prisma.like.findFirst({
      where: {
        userId: currentUserId,
        postId: post.id,
      },
    });
    if (likeExist) isLiked = true;
  }

  return (
    <div className="flex gap-4">
      {/* Like Button */}
      <PostLikeButton
        isLiked={isLiked}
        totalLikes={post._count.likes}
        postId={post.id}
      />

      {/* Comment Button */}
      <div className="mr-auto px-4 py-1 bg-slate-50 rounded-xl cursor-pointer flex items-center gap-2">
        <Image
          src={'/images/comment.png'}
          width={64}
          height={64}
          alt=""
          className="w-4 h-4"
        />
        <span className="text-slate-300">|</span>
        <span className="text-slate-500">
          {post._count.comments}{' '}
          <span className="hidden md:inline">Comments</span>
        </span>
      </div>

      {/* Comment Button */}
      <div className="px-4 py-1 bg-slate-50 rounded-xl cursor-pointer flex items-center gap-2">
        <Image
          src={'/images/share.png'}
          width={64}
          height={64}
          alt=""
          className="w-4 h-4"
        />
        <span className="hidden md:inline">Shares</span>
      </div>
    </div>
  );
};

export default PostInteraction;
