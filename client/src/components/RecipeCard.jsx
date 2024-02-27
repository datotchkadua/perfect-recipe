import React from "react";
import fakeBgImg from "../assets/salad.jpg";
import StarsRating from "./StarsRating";
const RecipeCard = ({ recipeData }) => {
  console.log(recipeData);
  const { image, calories, label, recipeId } = recipeData;
  return (
    <div
      className="max-w-[300px]  bg-white border border-gray-200 
rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img className="rounded-t-lg w-full h-[200px] " src={image} alt="food" />

      <div className="px-2 pt-1 pb-2">
        <StarsRating />

        <h5 className="mb-2 text-xxl font-bold tracking-tight text-gray-900 dark:text-white">
          {label}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          person image and calories
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;

// <button onClick={ () => navigate("details", {state: {recipe}})}>View More</button>
