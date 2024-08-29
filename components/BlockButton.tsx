'use client';

import { switchBlock } from '@/lib/actions';
import { useOptimistic, useState } from 'react';

const BlockButton = ({
  userId,
  isBlocked,
}: {
  userId: string;
  isBlocked: boolean;
}) => {
  const [block, setBlock] = useState(isBlocked);
  const [optimisticBlock, updateOptimisticBlock] = useOptimistic(
    block,
    (state, value) => {
      return !state;
    }
  );

  const blockAction = async () => {
    try {
      updateOptimisticBlock(true);
      await switchBlock(userId);
      setBlock((prev) => !prev);
    } catch (error) {}
  };

  return (
    <form action={blockAction} className="flex flex-col items-end">
      <button className="text-red-500 font-semibold">
        {optimisticBlock ? 'Unblock User' : 'Block User'}
      </button>
    </form>
  );
};

export default BlockButton;
