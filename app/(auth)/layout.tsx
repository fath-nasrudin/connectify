import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
      {children}
    </div>
  );
}
