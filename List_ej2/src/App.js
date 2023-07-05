import { recipes } from "./data.js";

export default function RecipeList() {
  const receta = recipes.map((recipe) => (
    <>
      <h2 key={recipe.id}>{recipe.name}</h2>
      <h4>Ingredientes: </h4>
      <ul>
        {recipe.ingredients.map((ingrediente) => (
          <li key={ingrediente}>{ingrediente}</li>
        ))}
      </ul>
    </>
  ));
  return (
    <div>
      <h1>RECETAS</h1>
      {receta}
    </div>
  );
}
