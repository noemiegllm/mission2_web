//UI Front
const searchBtn = document.getElementById("searchBtn");
const noResultMessage = document.getElementById("noResultMessage");
const loadingGIF = document.getElementById("loadingGIF");
let searchInput = document.getElementById("searchInput");
let articleResult = document.getElementById("articleResult");

/**
 * Show the loading GIF
 */
export function showLoading() {
    noResultMessage.style.display = 'none';
    articleResult.style.display = 'none';
    loadingGIF.style.display = 'block';
    articleResult.innerHTML = '';
};

/**
 * Show that the request found no result
 */
export function showNoResult(){
    noResultMessage.style.display = 'block';
    articleResult.style.display = 'none';
    loadingGIF.style.display = 'none'; 
}

/**
 * Show the request's result
 */
export function showResult(){
    articleResult.style.display = 'block';
    noResultMessage.style.display = 'none';
    loadingGIF.style.display = 'none';
}


export function createCard(recipe){
    
    const card = document.createElement('article');

    card.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}"/>
        <p>${recipe.instructions}</p>      
    `;

    articleResult.appendChild(card);
}