'use client';

import { updateUser } from '@/lib/actions';
import { User } from '@prisma/client';
import React, { useActionState, useState } from 'react';
import { useRouter } from 'next/navigation';
import UpdateButton from './UpdateButton';

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [userData, setUserData] = useState<User>(user);
  const [updateState, updateFormAction] = useActionState(updateUser, {
    success: false,
    error: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <button
          className="text-blue-500 font-semibold text-xs"
          onClick={() => setOpen(true)}
        >
          Update
        </button>
      </div>
      {open && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-65 z-50 flex flex-col items-center justify-center">
          <form
            action={(formData: FormData) => updateFormAction(formData)}
            className="relative p-12 bg-white shadow-md  rounded-md w-full md:w-1/2 xl:w-1/3 flex flex-col gap-4"
          >
            <h1 className="text-2xl font-bold ">Update Profile</h1>
            <div className="text-xs text-gray-500">
              Info: Use the navbar profile to change the avatar or username.
            </div>

            {/* Wrapper */}
            <div className=" flex flex-wrap justify-between gap-2 xl:gap-4">
              {/* First Name */}
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="name" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="name"
                  name="name"
                  className="ring-1 ring-gray-300 px-4 py-2 rounded-md text-sm"
                  value={userData.name || ''}
                  onChange={handleInputChange}
                />
              </div>

              {/* Surname */}
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="surname" className="text-xs text-gray-500">
                  Surname
                </label>
                <input
                  type="text"
                  placeholder="Surname"
                  id="surname"
                  name="surname"
                  value={userData.surname || ''}
                  onChange={handleInputChange}
                  className="ring-1 ring-gray-300 px-4 py-2 rounded-md text-sm"
                />
              </div>

              {/* Bio */}
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="bio" className="text-xs text-gray-500">
                  Bio
                </label>
                <input
                  type="text"
                  placeholder="Your bio"
                  id="bio"
                  name="bio"
                  value={userData.bio || ''}
                  onChange={handleInputChange}
                  className="ring-1 ring-gray-300 px-4 py-2 rounded-md text-sm"
                />
              </div>

              {/* City */}
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="city" className="text-xs text-gray-500">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Your city"
                  id="city"
                  name="city"
                  value={userData.city || ''}
                  onChange={handleInputChange}
                  className="ring-1 ring-gray-300 px-4 py-2 rounded-md text-sm"
                />
              </div>

              {/* Work */}
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="work" className="text-xs text-gray-500">
                  Work
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  id="work"
                  name="work"
                  value={userData.work || ''}
                  onChange={handleInputChange}
                  className="ring-1 ring-gray-300 px-4 py-2 rounded-md text-sm"
                />
              </div>

              {/* School */}
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="school" className="text-xs text-gray-500">
                  School
                </label>
                <input
                  type="text"
                  placeholder="Your school"
                  id="school"
                  name="school"
                  value={userData.school || ''}
                  onChange={handleInputChange}
                  className="ring-1 ring-gray-300 px-4 py-2 rounded-md text-sm"
                />
              </div>

              {/* Website */}
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="website" className="text-xs text-gray-500">
                  Website
                </label>
                <input
                  type="text"
                  placeholder="yourwebsite.com"
                  id="website"
                  name="website"
                  value={userData.website || ''}
                  onChange={handleInputChange}
                  className="ring-1 ring-gray-300 px-4 py-2 rounded-md text-sm"
                />
              </div>
            </div>

            <div>
              <UpdateButton />

              {/* State message */}
              <div className="text-green-500 text-xs">
                {updateState.success && 'Success update the user'}
              </div>
              <div className="text-xs text-red-500">
                {updateState.error && 'Failed to update the user'}
              </div>
            </div>

            {/* close button */}
            <button
              className="absolute right-0 top-0 p-2"
              onClick={() => {
                setOpen(false);
                if (updateState.success) router.refresh();
              }}
            >
              X
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateUser;
