
import Link from "next/dist/client/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return ( <Link href={`/recipe/${recipe.id}`} className="card">
    <div className="card"></div>
    <div className="recipe-card">
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
    </div>
     </Link>
  );
}
