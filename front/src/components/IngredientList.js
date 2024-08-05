import React from 'react';

function IngredientList({ ingredients, onRemove }) {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.id} className="list-item">
          {ingredient.nom} - {ingredient.allee}
          <button onClick={() => onRemove(ingredient.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default IngredientList;
