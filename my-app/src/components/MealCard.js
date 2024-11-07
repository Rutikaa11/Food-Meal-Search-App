import React from "react";

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="meal-image"
      />
      <h3>{meal.strMeal}</h3>
      <p>{meal.strArea}</p>
      <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
        Recipe Instructions
      </a>
    </div>
  );
};

export default MealCard;
