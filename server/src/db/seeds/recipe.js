import { v4 as uuidv4 } from "uuid";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipe").del();
  await knex("recipe").insert([
    {
      id: uuidv4(),
      title: "Fried Rice",
      ingredients:
        "White rice, Garlic, Chicken, Sweet soy sauce or soy sauce, Sambal, Scallions, Salt",
      instruction:
        "1. Heat cooking oil on a wok.\n2. Sauté garlic until fragrant.\n3. Add white rice and stir until evenly distributed.\n4. Add sweet or salty soy sauce, chili sauce, salt\n5. Stir until evenly distributed and cook for 5 minutes.\n6. Add green onion and stir until evenly distributed.",
      caption:
        "Enjoy savory and delicious home-style fried rice with this recipe, made with simple ingredients such as rice, chicken, eggs and vegetables.",
      category: "Main Course",
      img_filename: "fried-rice.jpg",
    },
    {
      id: uuidv4(),
      title: "Pizza",
      ingredients: "Flour, Water, Sugar, Salt, Yeast, Olive oil",
      instruction:
        "1. Combine flour, water, sugar, salt, yeast and olive oil until evenly mixed. \n2. Stir while pouring ice water little by little. \n3. Knead the dough until smooth and elastic. \n4. Let the dough rest for 30 minutes to rise. \n5. After rising, flatten the dough with a rolling pin. \n6. Place the dough on a pizza pan that has been greased with olive oil. \n7. Add tomato sauce and toppings to taste. \n8. Bake in the oven for 10-15 minutes.",
      caption: "Make your own pizza at home with easy recipes.",
      category: "Main Course",
      img_filename: "pizza.jpg",
    },
    {
      id: uuidv4(),
      title: "Rendang Meat",
      ingredients:
        "Beef (500-700g), Coconut milk (1 can), Lemongrass, Ginger, Tamarind paste, Brown sugar, Salt, Oil.",
      instruction:
        "1. Cut the beef into small pieces. \n2. Combine the rendang spices, such as lemongrass, ginger, lime leaves, and turmeric leaves. \n3. Sauté the rendang seasoning until fragrant. \n4. Add the beef pieces and stir until it changes color. \n5. Add coconut milk and water, then cook over low heat for a few hours until the meat is tender and the spices are absorbed. \n6. Add brown sugar and salt to taste.",
      caption: "enjoy rendang with the most delicious recipe in the world",
      category: "Main Course",
      img_filename: "rendang.jpg",
    },
    {
      id: uuidv4(),
      title: "Fried Chicken",
      ingredients: "Chicken, Wheat flour, Salt, Pepper, Cooking oil",
      instruction:
        "1. Cut the chicken into small pieces. \n2. Combine flour, salt, and pepper. \n3. Coat the chicken pieces with the flour mixture. \n4. Heat cooking oil in a wok. \n5. Fry the chicken until browned and cooked. \n6. Serve with rice or your favorite sauce.",
      caption: "Enjoy delicious fried chicken at home.",
      category: "Main Course",
      img_filename: "fried-chicken.jpg",
    },
    {
      id: uuidv4(),
      title: "Pasta Carbonara",
      ingredients: "Pasta, Eggs, Parmesan cheese, Bacon, Olive oil, Garlic",
      instruction:
        "1. Boil the pasta until al dente. \n2. Meanwhile, sauté garlic and bacon in olive oil. \n3. Mix in eggs and parmesan cheese. \n4. Drain the pasta and mix it with the egg mixture. \n5. Serve immediately.",
      caption: "Enjoy this delicious pasta dish at home.",
      category: "Main Course",
      img_filename: "carbonara-pasta.jpg",
    },
    {
      id: uuidv4(),
      title: "Tomato Soup",
      ingredients:
        "Tomatoes, Onions, Chicken broth, Sugar, Salt, Pepper, Olive oil",
      instruction:
        "1. Sauté onion until fragrant. \n2. Add tomatoes, chicken stock, sugar, salt, and pepper. \n3. Cook until the tomatoes are soft. \n4. Blend this mixture until smooth. \n5. Heat again before serving.",
      caption: "Enjoy fresh tomato soup at home.",
      category: "Soup",
      img_filename: "tomato-soup.jpg",
    },
    {
      id: uuidv4(),
      title: "Salad Caesar",
      ingredients:
        "Romaine leaves, Croutons, Parmesan cheese, Caesar dressing, Grilled chicken",
      instruction:
        "1. Cut romaine leaves and grilled chicken into small pieces. \n2. Add croutons and parmesan cheese. \n3. Drizzle with Caesar dressing. \n4. Mix well and serve.",
      caption: "Enjoy fresh Caesar salad at home.",
      category: "Salad",
      img_filename: "caesar-salad.jpg",
    },
    {
      id: uuidv4(),
      title: "Fried Noodles",
      ingredients:
        "Mie, Sayuran, Telur, Kecap manis, Bawang putih, Minyak goreng",
      instruction:
        "1. Boil the noodles until cooked. \n2. Sauté garlic, vegetables, and egg until vegetables are wilted. \n3. Add noodles and sweet soy sauce. \n4. Stir well and cook until hot. \n5. Serve with cucumber slices.",
      caption: "Enjoy delicious fried noodles at home.",
      category: "Main Course",
      img_filename: "mie-goreng.jpg",
    },
    {
      id: uuidv4(),
      title: "Pancake",
      ingredients:
        "Wheat flour, eggs, milk, sugar, baking powder, vegetable oil",
      instruction:
        "1. Combine flour, baking powder, sugar, eggs, and milk. \n2. Heat vegetable oil on a non-stick pan. \n3. Pour the pancake batter onto the hot pan. \n4. Cook until bubbles appear on the surface. \n5. Flip the pancake and cook until browned. \n6. Serve with maple syrup or fruits.",
      caption: "Enjoy delicious pancakes at home.",
      category: "Breakfast",
      img_filename: "pancake.jpg",
    },
  ]);
};
