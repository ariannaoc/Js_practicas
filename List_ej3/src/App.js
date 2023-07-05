import { recipes } from "./data.js";

export default function List() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map((recipe) => (
        <Receta {...recipe} />
      ))}
    </div>
  );
}

function Receta({ name, ingredients }) {
  return (
    <>
      <h2>{name}</h2>
      <h4>Ingredientes: </h4>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}
