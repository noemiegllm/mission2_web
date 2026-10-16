//API module
export async function getRecipeByName(name) {
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

    //catch error 404/500
    if (!response.ok){
      throw new Error(`HTTP ${response.status} requesting "${name}"`);
    }

    const mealsResult = await response.json();

    if(!mealsResult.meals){
      return [];
    }

    //transform all the meals from json to object vi map()
    return mealsResult.meals.map(oneMeal => ({
      id: oneMeal.idMeal,
      name: oneMeal.strMeal,
      instruction: oneMeal.strInstructions,
      image: oneMeal.strMealThumb
    }));
  }catch(error){
    console.error("Error catched : ", error.message);
    throw error;
  }
}