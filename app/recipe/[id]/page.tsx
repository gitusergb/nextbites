
import Link from "next/link";
import { Suspense } from "react";
import { getRecipe, recipes } from "@/app/data/recipes";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: String(recipe.id),
  }));
}

<<<<<<< HEAD
export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<main className="detail-container">Loading recipe...</main>}>
      <RecipeDetails params={params} />
    </Suspense>
  );
}

async function RecipeDetails({
=======

export default async function RecipeDetails({
>>>>>>> d305900b97b132a1ffd6301e9652346f294cb8b7
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
<<<<<<< HEAD
  const recipe = getRecipe(id);

  if (!recipe) notFound();

  return (
=======


  if (!recipe) {
    notFound();
  }

  return (

>>>>>>> d305900b97b132a1ffd6301e9652346f294cb8b7
    <main className="detail-container">
      <Link href="/" className="back-link">
        ← Back to recipes
      </Link>

      <div className="detail-card">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="detail-image"
        />

        <div className="detail-content">
          <span className="recipe-cuisine">{recipe.cuisine}</span>

          <h1>{recipe.title}</h1>

          <p className="detail-meta">
            Cooking time: {recipe.minutes} minutes | Difficulty:{" "}
            {recipe.difficulty}
          </p>

          <h2>Ingredients</h2>

          <ul className="detail-list">

            {(recipe.ingredients ?? []).map((ingredient, index) => (

              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2>Cooking Instructions</h2>

          <ol className="detail-list">

            {(recipe.steps ?? []).map((step, index) => (

              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );

}

