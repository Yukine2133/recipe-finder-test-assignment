import { SearchForm } from "@/components/SearchForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 text-purple-400">
              Recipe Finder
            </h1>
            <p className="text-gray-300">
              Search for delicious recipes by name, cuisine, or preparation time
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <SearchForm />
          </div>
        </div>
      </div>
    </main>
  );
}
