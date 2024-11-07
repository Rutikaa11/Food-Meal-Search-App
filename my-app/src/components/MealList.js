import React from "react";
import MealCard from "./MealCard";

const MealList = ({ meals }) => {
  return (
    <div className="meal-list">
      {meals && meals.length > 0 ? (
        meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
      ) : (
        <p>No meals found. Please try again.</p>
      )}
    </div>
  );
};

export default MealList;
