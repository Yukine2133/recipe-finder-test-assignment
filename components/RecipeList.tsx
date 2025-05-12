import Link from 'next/link'
import Image from 'next/image'
import { getRecipes } from '@/lib/api'
import type { SearchParamsType } from '@/lib/types'
import { searchParamsTypePromise } from '@/app/recipes/page'
import RecipeCard from './RecipeCard'

export async function RecipeList({ searchParams }: { searchParams: searchParamsTypePromise }) {
  const { query, cuisine, maxReadyTime } = (await searchParams) as SearchParamsType
  const recipes = await getRecipes(query, cuisine, maxReadyTime)

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium text-gray-300">No recipes found</h2>
        <p className="mt-2 text-gray-400">Try adjusting your search criteria</p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium"
        >
          Back to Search
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-300">Found {recipes.length} recipes</p>
        <Link
          href="/"
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white text-sm font-medium"
        >
          New Search
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
