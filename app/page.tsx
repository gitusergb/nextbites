import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";


export default function Home() {
  return (
    <main>
      <h1>Find your next bite.</h1>
      

        <RecipeGrid recipes={recipes} />
    </main>
  );
}
