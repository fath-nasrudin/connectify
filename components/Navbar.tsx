import React from 'react';
import { MobileMenu } from './MobileMenu';
import Link from 'next/link';
import { House, Users, CirclePlus } from 'lucide-react';
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';

export function Navbar() {
  return (
    <div className="h-24 flex justify-between items-center">
      <div className="flex gap-16 items-center">
        <div className="md:hidden lg:block">
          <Link href="/" className="text-xl font-bold text-blue-500">
            Connectify
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="flex gap-8 font-semibold">
            <Link href="/" className="flex gap-1 items-center">
              <House size="16" /> Homepage
            </Link>
            <Link href="/" className="flex gap-1 items-center">
              <Users size="16" /> Friends
            </Link>
            <Link href="/" className="flex gap-1 items-center">
              <CirclePlus size="16" /> Stories
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <ClerkLoading>Loading...</ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <span className="font-semibold cursor-pointer">Login</span>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
