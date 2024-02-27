import { useQuery } from "@tanstack/react-query";

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
    return <h3>Loading!</h3>;
  }

  if (isError) {
    return (
      <>
        <h3>Error</h3>
        <p>{error.toString()}</p>
      </>
    );
  }

  return (
    <>
      <section>
        {recipesData?.map((recipe) => {
          const urIParts = recipe.recipe.uri.split("_");
          const recipeId = urIParts[urIParts.length - 1];

          return (
            <RecipeCard
              key={recipeId}
              recipeData={{ ...recipe.recipe, recipeId }}
            />
          );
        })}
      </section>
    </>
  );
};

export default ExploreRecipes;
