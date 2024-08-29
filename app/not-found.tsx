import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-20 px-4 flex flex-col items-center justify-center bg-white">
      <h2 className="text-2xl font-bold text-slate-500">Not Found</h2>
      <p className="text-slate-500">Could not find requested resource</p>
      <Link href="/" className="text-blue-500">
        Return Home
      </Link>
    </div>
  );
}
