import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
      onDelete?.();
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
