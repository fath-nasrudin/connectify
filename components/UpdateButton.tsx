import React from 'react';
import { useFormStatus } from 'react-dom';

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="p-1 w-full bg-blue-500 rounded-md text-white disabled:bg-slate-300"
      disabled={pending}
    >
      {pending ? 'saving' : 'save'}
    </button>
  );
};

export default UpdateButton;
