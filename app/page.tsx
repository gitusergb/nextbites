
import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Discover Delicious Recipes</h1>
        <p>
          Explore amazing dishes from around the world.
          Find something delicious to cook today!
        </p>
      </section>

      <section className="recipes-section">
        <h2>Popular Recipes</h2>

        <RecipeGrid recipes={recipes} />
      </section>
    </main>
  );
}
