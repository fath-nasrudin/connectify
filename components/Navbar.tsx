import React from 'react';
import { MobileMenu } from './MobileMenu';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className="h-24 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-500">
        Connectify
      </Link>
      <div>Navigations</div>
      <div>searchbar</div>
      <MobileMenu />
    </div>
  );
}
