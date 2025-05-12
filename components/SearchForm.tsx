"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function SearchForm() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [maxReadyTime, setMaxReadyTime] = useState<number | undefined>(
    undefined
  );
  const [isFormValid, setIsFormValid] = useState(false);

  // Supported cuisines from Spoonacular API
  const cuisines = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  useEffect(() => {
    // Enable the Next button only when at least one field is filled
    setIsFormValid(!!query || !!cuisine || !!maxReadyTime);
  }, [query, cuisine, maxReadyTime]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build query parameters
    const params = new URLSearchParams();
    if (query) params.append("query", query);
    if (cuisine) params.append("cuisine", cuisine);
    if (maxReadyTime) params.append("maxReadyTime", maxReadyTime.toString());

    // Navigate to recipes page with query parameters
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="query"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
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
          <label
            htmlFor="cuisine"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
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
          <label
            htmlFor="maxReadyTime"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Maximum Preparation Time (minutes)
          </label>
          <input
            type="number"
            id="maxReadyTime"
            placeholder="e.g., 30"
            min="1"
            value={maxReadyTime || ""}
            onChange={(e) =>
              setMaxReadyTime(
                e.target.value ? Number.parseInt(e.target.value) : undefined
              )
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
            ? "bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            : "bg-gray-600 cursor-not-allowed"
        }`}
      >
        <span>Next</span>
        <ChevronRight className="ml-2 h-5 w-5" />
      </button>
    </form>
  );
}
