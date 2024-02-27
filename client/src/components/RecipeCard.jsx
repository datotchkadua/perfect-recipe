import calorieSvg from "../assets/caloriessvg.svg";
import { Link } from "react-router-dom";
import StarsRating from "./StarsRating";

const RecipeCard = ({ recipeData }) => {
  const {
    image,
    calories,
    label,
    recipeId,
    url: authorLink,
    source,
  } = recipeData;
  console.log(recipeData);
  return (
    <section
      className="w-[300px] sm:w-[440px] md:w-[340px] h-[370px] m-4
       bg-white border border-gray-200 
rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    >
      <img className="rounded-t-lg w-full h-[200px] " src={image} alt="food" />

      <div className="px-2.5 pt-1 pb-2">
        <StarsRating />

        <h5 className="my-3 text-xxl font-bold tracking-tight text-gray-900 dark:text-white">
          {label}
        </h5>

        <div className="flex flex-col justify-start items-start mob:flex-row text-sm  mob:justify-between mob:items-center w-full">
          <p className="flex  justify-center items-center mb-2 font-normal text-gray-700 dark:text-gray-400">
            Recipe by :{" "}
            <a
              href={authorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold "
            >
              {source}
            </a>
          </p>
          <div className="flex mb-2 px-1 border items-center rounded-md border-gray-400 ">
            <img src={calorieSvg} alt="caloerie" className="w-7 h-7" />
            <span className="text-gray-500">{calories.toFixed()} cals</span>
          </div>
        </div>

        <Link to={`/recipe/${recipeId}`}>
          <span className="text-[#924d44] ">Read more...</span>
        </Link>
      </div>
    </section>
  );
};

export default RecipeCard;

// <button onClick={ () => navigate("details", {state: {recipe}})}>View More</button>
