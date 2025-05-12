import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-300 mb-6">
          The page you are looking for doesn&apos;t exist or has been moved
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
