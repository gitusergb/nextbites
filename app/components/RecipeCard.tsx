
<<<<<<< HEAD
import Link from "next/dist/client/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return ( <Link href={`/recipe/${recipe.id}`} className="card">
    <div className="card"></div>
    <div className="recipe-card">
=======
import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
}: {
  recipe: Recipe;
}) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="recipe-card"
    >
>>>>>>> d305900b97b132a1ffd6301e9652346f294cb8b7
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-image"
      />

      <div className="recipe-content">
        <span className="recipe-cuisine">{recipe.cuisine}</span>

        <h2>{recipe.title}</h2>

        <div className="recipe-details">
          <span>⏱ {recipe.minutes} mins</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
<<<<<<< HEAD
    </div>
     </Link>
=======
    </Link>
>>>>>>> d305900b97b132a1ffd6301e9652346f294cb8b7
  );
}
