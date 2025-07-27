// import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <>
      <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <h1><Link to="/">🍽️ Recipe Sharing App</Link></h1>
      <Routes>
        <Route path="/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        } />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
