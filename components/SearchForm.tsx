'use client'

import type React from 'react'

import { ChevronRight } from 'lucide-react'
import { cuisines } from '@/lib/constants'
import useSearchForm from '@/hooks/useSearchForm'

export function SearchForm() {
  const {
    query,
    cuisine,
    maxReadyTime,
    isFormValid,
    setQuery,
    setCuisine,
    setMaxReadyTime,
    handleSubmit,
  } = useSearchForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-300 mb-1">
            Recipe Name
          </label>
          <input
            type="text"
            id="query"
            placeholder="Enter a recipe name (e.g., pasta)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
        </div>

        <div>
          <label htmlFor="cuisine" className="block text-sm font-medium text-gray-300 mb-1">
            Cuisine
          </label>
          <select
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          >
            <option value="">Select a cuisine</option>
            {cuisines.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="maxReadyTime" className="block text-sm font-medium text-gray-300 mb-1">
            Maximum Preparation Time (minutes)
          </label>
          <input
            type="number"
            id="maxReadyTime"
            placeholder="e.g., 30"
            min="1"
            value={maxReadyTime || ''}
            onChange={(e) =>
              setMaxReadyTime(e.target.value ? Number.parseInt(e.target.value) : undefined)
            }
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full flex items-center justify-center py-3 px-4 rounded-md text-white font-medium ${
          isFormValid
            ? 'bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
            : 'bg-gray-600 cursor-not-allowed'
        }`}
      >
        <span>Next</span>
        <ChevronRight className="ml-2 h-5 w-5" />
      </button>
    </form>
  )
}
