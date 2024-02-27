import axios from "axios";

const apiKey = import.meta.env.VITE_EDAMAM_API_KEY;
const apiId = import.meta.env.VITE_EDAMAM_APP_ID;
export const fetchRecipes = async ({ query = "pizza" }) => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiId}&app_key=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const fetchRecipesById = async ({
  recipeId = "c9bf37296a0126d18781c952dc45a230",
}) => {
  const url = `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${apiId}&app_key=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

// const { data: dataById } = useQuery({
//   queryKey: ["pizaByid, id"],
//   queryFn: fetchRecipesById,
// });
