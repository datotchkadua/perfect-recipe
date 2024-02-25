import axios from "axios";

const apiKey = import.meta.env.VITE_EDAMAM_API_KEY;
const apiId = import.meta.env.VITE_EDAMAM_APP_ID;
export const fetchRecipes = async ({ query = "pizza" }) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
