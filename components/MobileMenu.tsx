'use client';

import Link from 'next/link';
import React, { useState } from 'react';

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <div
        className={`w-6 h-1 bg-blue-500 rounded-sm ${
          isOpen ? 'rotate-45' : ''
        } origin-top-left duration-100`}
      ></div>
      <div
        className={`w-6 h-1 bg-blue-500 rounded-sm ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></div>
      <div
        className={`w-6 h-1 bg-blue-500 rounded-sm ${
          isOpen ? '-rotate-45' : ''
        } origin-bottom-left  duration-100`}
      ></div>
    </div>
  );
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative md:hidden">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <HamburgerIcon isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className="absolute mt-4 p-4 right-0 min-w-80 bg-slate-200 rounded-md flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
}
