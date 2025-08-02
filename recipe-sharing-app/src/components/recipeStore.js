// import { create } from "zustand";

// const useRecipeStore = create((set, get) => ({
//   recipes: [],
//   searchTerm: "",
//   filteredRecipes: [],
//   favorites: [],
//   recommendations: [],
//   addRecipe: (newRecipe) => {
//     const updated = [...get().recipes, newRecipe];
//     set({ recipes: updated });
//     get().filterRecipes();
//   },

//   // set((state) => ({
//   //   recipes: [...state.recipes, newRecipe],
//   // })),
//   updateRecipe: (updatedRecipe) => {
//     const updated = get().recipes.map((recipe) =>
//       recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//     );
//     set({ recipes: updated });
//     get().filterRecipes();
//   },
//   // set((state) => ({
//   //   recipes: state.recipes.map((recipe) =>
//   //     recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//   //   ),
//   // })),
//   deleteRecipe: (id) => {
//     const updated = get().recipes.filter((recipe) => recipe.id !== id);
//     set({ recipes: updated });
//     get().filterRecipes();
//   },
//   // set((state) => ({
//   //   recipes: state.recipes.filter((recipe) => recipe.id !== id),
//   // })),

//   setSearchTerm: (term) => {
//     set({ searchTerm: term });
//     get().filterRecipes();
//   },

//   filterRecipes: () => set(state => ({
//       filterRecipes: state.recipes.filter(recipe =>
//         recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
//       ),
//     })),
//   // setRecipes: (recipes) => set({ recipes }),
//   setRecipes: (recipes) => {
//     set({ recipes });
//     get().filterRecipes();
//   },

//     // ⭐ Favorites
//   addFavorite: (recipeId) => {
//     const current = get().favorites;
//     if (!current.includes(recipeId)) {
//       set({ favorites: [...current, recipeId] });
//     }
//   },

//   removeFavorite: (recipeId) => {
//     set((state) => ({
//       favorites: state.favorites.filter((id) => id !== recipeId),
//     }));
//   },

//   isFavorite: (recipeId) => get().favorites.includes(recipeId),

//   // 🔍 Simple mock recommendations based on favorites
//   generateRecommendations: () => {
//     const { recipes, favorites } = get();
//     const recommended = recipes.filter(
//       (r) => favorites.includes(r.id) === false && Math.random() > 0.5
//     );
//     set({ recommendations: recommended });
//   },
// }));

// export { useRecipeStore };




import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // ✅ Add Recipe
  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filterRecipes(); // ✅ call function, not array
  },

  // ✅ Update Recipe
  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updated });
    get().filterRecipes(); // ✅
  },

  // ✅ Delete Recipe
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updated });
    get().filterRecipes(); // ✅
  },

  // ✅ Set search term and trigger filtering
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // ✅
  },

  // ✅ Compute filtered recipes
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // ✅ Set full list of recipes
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes(); // ✅
  },

  // ✅ Favorites logic
  addFavorite: (recipeId) => {
    const current = get().favorites;
    if (!current.includes(recipeId)) {
      set({ favorites: [...current, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },

  isFavorite: (recipeId) => get().favorites.includes(recipeId),

  // ✅ Simple random recommendations (mock)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) => !favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));

export { useRecipeStore };
