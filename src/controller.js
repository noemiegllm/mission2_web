//Logic
import { getRecipeByName } from './api.js';
import { showLoading, showNoResult, showResult, createCard } from './view.js';

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
let articleResult = document.getElementById("articleResult");

async function handleSearch(){
    try {
        const dataInput = searchInput.value.trim();
        if(!dataInput){
            showNoResult("Please, enter a term in the search bar");
            return;
        }else{
            showLoading();
            const recipes = await getRecipeByName(dataInput);
            
            if (recipes.length === 0) {
                showNoResult("No result found");
            } else {
                showResult();
                articleResult.innerHTML = "";
                recipes.forEach(oneRecipe => { 
                    createCard(oneRecipe);
                }); 
            }
        }
    } catch (error) {
        showNoResult("Something went wrong. Please try again.");
    }finally{
        searchBtn.disabled = false;
    }
}

searchBtn.addEventListener("click",  handleSearch);

searchInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        handleSearch();
    }
});