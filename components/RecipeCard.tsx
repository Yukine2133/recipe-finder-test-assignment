import { Recipe } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:ring-2 hover:ring-purple-500"
    >
      <div className="relative h-48 w-full">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white line-clamp-2">{recipe.title}</h2>
        {recipe.readyInMinutes && (
          <p className="mt-2 text-sm text-gray-400">Ready in {recipe.readyInMinutes} minutes</p>
        )}
      </div>
    </Link>
  )
}
