import React from 'react';

function RecetteList({ recettes, onRemove }) {
  return (
    <ul>
      {recettes.map((recette) => (
        <li key={recette.id} className="list-item">
          <div>
            <h4>{recette.nom}</h4>
            <p>
              <strong>Type :</strong> {recette.type}
            </p>
            <p>
              <strong>Ingrédients :</strong> {recette.ingredients.map((ing) => ing.nom).join(', ')}
            </p>
            <p>{recette.instructions}</p>
          </div>
          <button onClick={() => onRemove(recette.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default RecetteList;
