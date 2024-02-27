export function getRecipeId(recipeUri) {
  const urIParts = recipeUri.split("_");
  return urIParts[urIParts.length - 1];
}
