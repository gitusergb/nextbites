
export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 25,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil",
    ],
    steps: [
      "Preheat the oven to 220°C.",
      "Spread tomato sauce over the pizza dough.",
      "Add mozzarella cheese and fresh basil.",
      "Drizzle olive oil over the pizza.",
      "Bake for 15 minutes and serve hot.",
    ],
  },
  {
    id: 2,
    title: "Chicken Biryani",
    cuisine: "Indian",
    minutes: 45,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600",
    ingredients: [
      "Chicken",
      "Basmati rice",
      "Onions",
      "Yogurt",
      "Biryani masala",
      "Ginger garlic paste",
    ],
    steps: [
      "Wash and soak the basmati rice.",
      "Marinate chicken with yogurt and spices.",
      "Fry onions until golden brown.",
      "Cook the chicken with the spices.",
      "Layer cooked rice over the chicken.",
      "Cover and cook on low heat until done.",
    ],
  },
  {
    id: 3,
    title: "Veg Fried Rice",
    cuisine: "Chinese",
    minutes: 20,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
    ingredients: [
      "Cooked rice",
      "Carrots",
      "Capsicum",
      "Spring onions",
      "Soy sauce",
      "Salt and pepper",
    ],
    steps: [
      "Heat oil in a pan.",
      "Add chopped vegetables.",
      "Stir fry the vegetables for a few minutes.",
      "Add cooked rice.",
      "Add soy sauce, salt and pepper.",
      "Mix well and serve hot.",
    ],
  },
  {
    id: 4,
    title: "Pancakes",
    cuisine: "American",
    minutes: 15,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
    ingredients: [
      "All-purpose flour",
      "Milk",
      "Egg",
      "Sugar",
      "Baking powder",
      "Butter",
    ],
    steps: [
      "Mix flour, sugar and baking powder.",
      "Add milk and egg.",
      "Whisk until you get a smooth batter.",
      "Heat a pan and add butter.",
      "Pour batter into the pan.",
      "Flip when bubbles appear and cook the other side.",
    ],
  },
];

export function getRecipe(id: string) {
  return recipes.find((recipe) => String(recipe.id) === id);
}
