import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filteredRecipes();
  },

  // set((state) => ({
  //   recipes: [...state.recipes, newRecipe],
  // })),
  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updated });
    get().filteredRecipes();
  },
  // set((state) => ({
  //   recipes: state.recipes.map((recipe) =>
  //     recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  //   ),
  // })),
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updated });
    get().filteredRecipes();
  },
  // set((state) => ({
  //   recipes: state.recipes.filter((recipe) => recipe.id !== id),
  // })),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      filterRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  // setRecipes: (recipes) => set({ recipes }),
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },
}));

export { useRecipeStore };
