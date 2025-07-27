import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: ["updateRecipe", "deleteRecipe"],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));

export { useRecipeStore };