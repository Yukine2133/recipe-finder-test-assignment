import Image from 'next/image'
import { getRecipeDetails } from '@/lib/api'
import { Clock, Users } from 'lucide-react'

export async function RecipeDetails({ id }: { id: string }) {
  const recipe = await getRecipeDetails(id)

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold text-purple-400 mb-4">{recipe.title}</h1>

        <div className="flex flex-wrap gap-4 mb-6">
          {recipe.readyInMinutes && (
            <div className="flex items-center text-gray-300">
              <Clock className="h-5 w-5 mr-2 text-purple-500" />
              <span>{recipe.readyInMinutes} minutes</span>
            </div>
          )}

          {recipe.servings && (
            <div className="flex items-center text-gray-300">
              <Users className="h-5 w-5 mr-2 text-purple-500" />
              <span>{recipe.servings} servings</span>
            </div>
          )}
        </div>

        {recipe.summary && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-white">Summary</h2>
            <div
              className="text-gray-300 prose prose-sm prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-white">Ingredients</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {recipe.extendedIngredients.map((ingredient, i) => (
              <li key={i} className="text-gray-300 flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>{ingredient.original}</span>
              </li>
            ))}
          </ul>
        </div>

        {recipe.instructions && (
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Instructions</h2>
            <div
              className="text-gray-300 prose prose-sm prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
