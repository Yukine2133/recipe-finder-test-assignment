"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-300 mb-6">
          We encountered an error while loading this page
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white font-medium"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
