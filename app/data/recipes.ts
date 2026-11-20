
export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  image: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 25,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600",
  },
  {
    id: 2,
    title: "Chicken Biryani",
    cuisine: "Indian",
    minutes: 45,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600",
  },
  {
    id: 3,
    title: "Veg Fried Rice",
    cuisine: "Chinese",
    minutes: 20,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
  },
  {
    id: 4,
    title: "Pancakes",
    cuisine: "American",
    minutes: 15,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
  },
];
