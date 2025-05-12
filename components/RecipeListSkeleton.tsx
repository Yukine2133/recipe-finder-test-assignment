export function RecipeListSkeleton() {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div className="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
        <div className="h-10 w-24 bg-gray-700 rounded animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="h-48 w-full bg-gray-700 animate-pulse"></div>
            <div className="p-4">
              <div className="h-6 w-3/4 bg-gray-700 rounded animate-pulse"></div>
              <div className="mt-2 h-4 w-1/2 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
