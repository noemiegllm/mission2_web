//Logic
import { getRecipeByName } from './api.js';
import { showLoading, showNoResult, showResult, createCard } from './view.js';

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", async () =>{
    showLoading();
    try {
        const dataInput = searchInput.value;
        const recipes = await getRecipeByName(dataInput);
        
        if (recipes.length === 0) {
            showNoResult();
        } else {
            showResult();
            console.log(recipes);
            recipes.forEach(recipe => { 
                createCard(recipe);
            }); 
        }
    } catch (error) {
        console.error("Erreur :", error);
        showNoResult();
    }
});