//UI Front
const noResultMessage = document.getElementById("noResultMessage");
const loadingGIF = document.getElementById("loadingGIF");
const searchBtn = document.getElementById("searchBtn");
let articleResult = document.getElementById("articleResult");

/**
 * Show the loading GIF
 */
export function showLoading() {
    noResultMessage.style.display = 'none';
    articleResult.style.display = 'none';
    loadingGIF.style.display = 'block';
    articleResult.innerHTML = '';
    searchBtn.disabled = true;
};

/**
 * Show that the request found no result
 */
export function showNoResult(message){
    articleResult.style.display = 'none';
    noResultMessage.textContent = message;
    noResultMessage.style.display = 'block';
    loadingGIF.style.display = 'none';
    searchBtn.disabled = false;
}

/**
 * Show the request's result
 */
export function showResult(){
    articleResult.style.display = 'block';
    noResultMessage.style.display = 'none';
    loadingGIF.style.display = 'none';
    searchBtn.disabled = false;
}

export function createCard(recipe){
    articleResult.innerHTML = '';
    const card = document.createElement('article');
    card.classList.add('recipe-card-item');

    const ingredientsList = recipe.ingredients
        .map(ingr => `<li>${ingr}</li>`)
        .join('');

    card.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}"/>
        <ul>${ingredientsList}</ul>
        <p>${recipe.instructions}</p>      
    `;

    articleResult.appendChild(card);
}