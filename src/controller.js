//Logic
import { getRecipeByName } from './api.js';
import { showLoading, showNoResult, showResult } from './view.js';

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
            // C'est ici que vous afficherez vos recettes dans articleResult par la suite !
        }
    } catch (error) {
        console.error("Erreur :", error);
        showNoResult(); // Par sécurité en cas d'erreur réseau
    }
});