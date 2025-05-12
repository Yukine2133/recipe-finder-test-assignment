import { Suspense } from 'react'
import type { SearchParamsType } from '@/lib/types'
import { RecipeListSkeleton } from '@/components/RecipeListSkeleton'
import { RecipeList } from '@/components/RecipeList'

export type searchParamsTypePromise = Promise<{ searchParams: SearchParamsType }>
export default function RecipesPage({ searchParams }: { searchParams: searchParamsTypePromise }) {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-purple-400 text-center">Recipe Results</h1>

        <Suspense fallback={<RecipeListSkeleton />}>
          <RecipeList searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  )
}
