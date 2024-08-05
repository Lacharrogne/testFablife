import React, { useState } from 'react';

function RecetteForm({ ingredients, onAdd }) {
  const [nom, setNom] = useState('');
  const [type, setType] = useState('Petit-déjeuner');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom || !selectedIngredients.length || !instructions) return;
    onAdd({ nom, type, ingredients: selectedIngredients, instructions });
    setNom('');
    setType('Petit-déjeuner');
    setSelectedIngredients([]);
    setInstructions('');
  };

  const toggleIngredientSelection = (ingredientId) => {
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(ingredientId)
        ? prevSelected.filter((id) => id !== ingredientId)
        : [...prevSelected, ingredientId]
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la recette"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Petit-déjeuner">Petit-déjeuner</option>
        <option value="Déjeuner">Déjeuner</option>
        <option value="Dîner">Dîner</option>
      </select>
      <h4>Sélectionnez les ingrédients :</h4>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id} className="list-item">
            <label>
              <input
                type="checkbox"
                checked={selectedIngredients.includes(ingredient.id)}
                onChange={() => toggleIngredientSelection(ingredient.id)}
              />
              {ingredient.nom}
            </label>
          </li>
        ))}
      </ul>
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <button type="submit">Ajouter Recette</button>
    </form>
  );
}

export default RecetteForm;
