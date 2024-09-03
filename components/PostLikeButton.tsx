'use client';
import { switchLike } from '@/lib/actions';
import Image from 'next/image';
import { useOptimistic, useState } from 'react';

const PostLikeButton = ({
  isLiked,
  totalLikes,
  postId,
}: {
  isLiked: boolean;
  totalLikes: number;
  postId: number;
}) => {
  const [like, setLike] = useState({ isLiked, totalLikes });
  const [likeOptimistic, switchLikeOptimistic] = useOptimistic(
    { isLiked: like.isLiked, totalLikes: like.totalLikes },
    (currentState, newState) => ({
      isLiked: !currentState.isLiked,
      totalLikes: currentState.isLiked
        ? currentState.totalLikes - 1
        : currentState.totalLikes + 1,
    })
  );

  return (
    <div className="px-4 py-1 bg-slate-50 rounded-xl flex items-center gap-2">
      <Image
        src={likeOptimistic.isLiked ? '/images/liked.png' : '/images/like.png'}
        width={64}
        height={64}
        alt=""
        className="w-4 h-4 cursor-pointer"
        onClick={async () => {
          switchLikeOptimistic(true);
          try {
            await switchLike({ postId: postId });
            setLike((prev) => ({
              isLiked: !prev.isLiked,
              totalLikes: prev.isLiked
                ? prev.totalLikes - 1
                : prev.totalLikes + 1,
            }));
          } catch (error) {}
        }}
      />
      <span className="text-slate-300">|</span>
      <span className="text-slate-500">
        {likeOptimistic.totalLikes}{' '}
        <span className="hidden md:inline">Likes</span>
      </span>
    </div>
  );
};

export default PostLikeButton;
