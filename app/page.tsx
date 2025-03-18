"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full" style={{ gap: '20px', height: '100vh' }}>
        <div className="flex items-center justify-center w-9/12" style={{ gap: '20px' }}>
            <Link href="#" className="flex items-center justify-center w-full border-1 border-sky-500 rounded-md max-w-60 h-32 text-center bg-gray-200 text-xl font-semibold">
              Vanilla
            </Link>
            <Link href="#" className="flex items-center justify-center w-full border-1 border-sky-500 rounded-md max-w-60 h-32 text-center bg-gray-200 text-xl font-semibold">
              Vue
            </Link>
            <Link href="/guide/" className="flex items-center justify-center w-full border-1 border-sky-500 rounded-md max-w-60 h-32 text-center bg-gray-200 text-xl font-semibold">
              React
            </Link>
        </div>
    </div>
  );
}
