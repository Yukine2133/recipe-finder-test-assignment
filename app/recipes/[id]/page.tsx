import { Suspense } from "react";
import Link from "next/link";
import { RecipeDetailsSkeleton } from "@/components/RecipeDetailsSkeleton";
import { RecipeDetails } from "@/components/RecipeDetails";

export default async function RecipeDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/recipes"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6"
        >
          ← Back to results
        </Link>

        <Suspense fallback={<RecipeDetailsSkeleton />}>
          <RecipeDetails id={id} />
        </Suspense>
      </div>
    </main>
  );
}
