import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IngredientForm from './components/IngredientForm';
import IngredientList from './components/IngredientList';
import RecetteForm from './components/RecetteForm';
import RecetteList from './components/RecetteList';
import './style/App.css';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/ingredients');
        setIngredients(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des ingrédients', error);
      }
    };

    const fetchRecettes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/recettes');
        setRecettes(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des recettes', error);
      }
    };

    fetchIngredients();
    fetchRecettes();
  }, []);

  const addIngredient = async (ingredient) => {
    try {
      const response = await axios.post('http://localhost:3000/ingredients', ingredient);
      setIngredients((prevIngredients) => [...prevIngredients, response.data]);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'ingrédient', error);
    }
  };

  const removeIngredient = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/ingredients/${id}`);
      setIngredients((prevIngredients) => prevIngredients.filter((ing) => ing.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'ingrédient', error);
    }
  };

  const addRecette = async (recette) => {
    try {
      const response = await axios.post('http://localhost:3000/recettes', recette);
      setRecettes((prevRecettes) => [...prevRecettes, response.data]);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la recette', error);
    }
  };

  const removeRecette = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/recettes/${id}`);
      setRecettes((prevRecettes) => prevRecettes.filter((recette) => recette.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de la recette', error);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Gestionnaire de Recettes</h1>
      </header>
      <div className="container">
        <div className="section">
          <h2>Ingrédients</h2>
          <IngredientForm onAdd={addIngredient} />
          <IngredientList ingredients={ingredients} onRemove={removeIngredient} />
        </div>
        <div className="section">
          <h2>Recettes</h2>
          <RecetteForm ingredients={ingredients} onAdd={addRecette} />
          <RecetteList recettes={recettes} onRemove={removeRecette} />
        </div>
      </div>
    </div>
  );
}

export default App;
