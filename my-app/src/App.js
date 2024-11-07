import React, { useState } from "react";
import axios from "axios";
import './App.css'
import MealList from "./components/MealList";
import SearchBar from "./components/searchbar";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  // Function to fetch meals from TheMealDB API
  const fetchMeals = async (query) => {
    if (!query) return; // If search is empty, do not fetch

    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    setMeals(response.data.meals || []); // Set meals or empty array if no meals found
  };

  return (
    <div className="app">
      <h1>Food Meal Search</h1>
      <SearchBar setSearch={setSearch} fetchMeals={fetchMeals} />
      <MealList meals={meals} />
    </div>
  );
};

export default App;
