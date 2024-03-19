import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";
import { getRecipeId } from "../utils/getRecipeId";
import { fetchRecipes } from "../utils/fetchRecipes";
import RecipeCard from "./RecipeCard";

const ExploreRecipes = () => {
  const {
    data: recipesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pizzas"],
    queryFn: fetchRecipes,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    toast.error(error.toString());
  }

  return (
    <div>
      <h2 className="text-4xl font-bold mb-20">Explore Recipes</h2>

      <section className="flex justify-center items-center flex-wrap">
        {recipesData?.slice(0, 8).map((recipe) => {
          const recipeId = getRecipeId(recipe.recipe.uri);
          return (
            <RecipeCard
              key={recipeId}
              recipeData={{ ...recipe.recipe, recipeId }}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ExploreRecipes;
