export function RecipeDetailsSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="h-64 sm:h-80 md:h-96 w-full bg-gray-700 animate-pulse"></div>

      <div className="p-6">
        <div className="h-10 w-3/4 bg-gray-700 rounded animate-pulse mb-4"></div>

        <div className="flex gap-4 mb-6">
          <div className="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
        </div>

        <div className="mb-8">
          <div className="h-8 w-32 bg-gray-700 rounded animate-pulse mb-3"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-4/6 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="mb-8">
          <div className="h-8 w-32 bg-gray-700 rounded animate-pulse mb-3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-4 w-full bg-gray-700 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
