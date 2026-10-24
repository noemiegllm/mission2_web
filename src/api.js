//API module
export async function getRecipeByName(name) {
  try{
    const encodeName = encodeURIComponent(name);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeName}`);

    //catch error 404/500
    if (!response.ok){
      throw new Error(`HTTP ${response.status} requesting "${name}"`);
    }

    const mealsResult = await response.json();

    if(!mealsResult.meals){
      return [];
    }

    //transform all the meals from json to object via a map()
    return mealsResult.meals.map(oneMeal => {

      let ingredients = [];
      for (let i=1; i <=20; i++){
        ingredients.push(oneMeal[`strIngredient${i}`]);
      }
      ingredients = ingredients
        .filter(ingr => ingr && ingr.trim() !== "")
        .map(ingr => ingr.trim());

      return {
        id: oneMeal.idMeal,
        name: oneMeal.strMeal,
        instructions: oneMeal.strInstructions,
        image: oneMeal.strMealThumb,
        ingredients : ingredients
      };
    });
  }catch(error){
    console.error("Error catched : ", error.message);
    throw error;
  }
}