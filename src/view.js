//UI Front
const searchBtn = document.getElementById("searchBtn");
const noResultMessage = document.getElementById("noResultMessage");
const loadingGIF = document.getElementById("loadingGIF");
let searchInput = document.getElementById("searchInput");
let articleResult = document.getElementById("articleResult");

/**
 * Show the loading GIF
 */
function showLoading() {
    noResultMessage.style.display = 'none';
    articleResult.style.display = 'none';
    loadingGIF.style.display = 'block';
};

/**
 * Show that the request found no result
 */
function showNoResult(){
    noResultMessage.style.display = 'block';
    articleResult.style.display = 'none';
    loadingGIF.style.display = 'none'; 
}

/**
 * Show the request's result
 */
function showResult(){
    articleResult.style.display = 'block';
    noResultMessage.style.display = 'none';
    loadingGIF.style.display = 'none';
}