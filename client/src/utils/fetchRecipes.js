import axios from "axios";

export const fetchRecipes = async (query = "pizza") => {
  const { REACT_APP_EDAMAM_API_KEY, REACT_APP_EDAMAM_APP_ID } = process.env;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_EDAMAM_APP_ID}&app_key=${REACT_APP_EDAMAM_API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
