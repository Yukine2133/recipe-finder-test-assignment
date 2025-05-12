import { RecipeDetails, Recipe } from "@/lib/types";

// Function to fetch recipes from Spoonacular API
export async function getRecipes(
  query?: string,
  cuisine?: string,
  maxReadyTime?: string
): Promise<Recipe[]> {
  // Build query parameters
  const params = new URLSearchParams();
  if (query) params.append("query", query);
  if (cuisine) params.append("cuisine", cuisine);
  if (maxReadyTime) params.append("maxReadyTime", maxReadyTime);

  // Add API key
  params.append("apiKey", process.env.SPOONACULAR_API_KEY || "");

  try {
    // Fetch data with caching for 1 minute (60 seconds)
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

// Function to fetch recipe details from Spoonacular API
export async function getRecipeDetails(id: string): Promise<RecipeDetails> {
  try {
    // Fetch data with caching for 1 minute (60 seconds)
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw new Error("Failed to fetch recipe details");
  }
}
