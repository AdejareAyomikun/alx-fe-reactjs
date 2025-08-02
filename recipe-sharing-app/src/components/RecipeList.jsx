// import { useRecipeStore } from "./recipeStore";
// import { Link } from "react-router-dom";

// const RecipeList = () => {
//   const recipes = useRecipeStore((state) => state.recipes);

//   return (
//     <div>
//       <h2>Recipes</h2>
//       {recipes.map((recipe) => (
//         <div key={recipe.id} style={{ marginBottom: "1rem" }}>
//           <h3>
//             <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
//           </h3>
//           <p>{recipe.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;



import React from 'react';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes);

  return (
    <div>
      <h2>📋 Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <DeleteRecipeButton id={recipe.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

