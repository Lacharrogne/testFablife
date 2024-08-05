import React, { useState } from 'react';

function IngredientForm({ onAdd }) {
  const [nom, setNom] = useState('');
  const [allee, setAllee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom || !allee) return;
    onAdd({ nom, allee });
    setNom('');
    setAllee('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de l'ingrédient"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type"
        value={allee}
        onChange={(e) => setAllee(e.target.value)}
      />
      <button type="submit">Ajouter Ingrédient</button>
    </form>
  );
}

export default IngredientForm;
