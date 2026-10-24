//Logic
import { getRecipeByName } from './api.js';
import { showLoading, showNoResult, showResult, createCard } from './view.js';

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", async () =>{
    
    showLoading();
    try {
        const dataInput = searchInput.value.trim();
        if(!dataInput){
            showNoResult("Please, enter a term in the search bar");
        }else{
            const recipes = await getRecipeByName(dataInput);
            
            if (recipes.length === 0) {
                showNoResult("No result found");
            } else {
                showResult();
                recipes.map(oneRecipe => { 
                    createCard(oneRecipe);
                }); 
            }
        }
    } catch (error) {
        showNoResult("Error :" + error);
    }
});