import { useQuery } from "@tanstack/react-query";

import fakeBgImg from "../assets/salad.jpg";
import { fetchRecipes } from "../utils/fetchRecipes";

const ExploreRecipes = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pizzas"],
    queryFn: fetchRecipes,
  });
  console.log(data);

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
      <div
        className="max-w-[300px]  bg-white border border-gray-200 
      rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <img
          className="rounded-t-lg w-full h-[250px] "
          src={fakeBgImg}
          alt="food"
        />

        <div className="p-5">
          <h1>stars rating here</h1>

          <h5 className="mb-2 text-xxl font-bold tracking-tight text-gray-900 dark:text-white">
            Name of food
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            person image and calories
          </p>
        </div>
      </div>
    </>
  );
};

export default ExploreRecipes;
