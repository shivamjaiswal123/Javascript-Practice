// https://newsapi.org/v2/everything?q=apple&from=2024-08-09&to=2024-08-09&sortBy=popularity&apiKey=API_KEY


const BASE_URL = "https://newsapi.org/v2/everything?q="
const API = ""

window.addEventListener('load', () => fetchApi("world"));

async function fetchApi(query){
    const res = await fetch(`${BASE_URL}${query}&apiKey=${API}`)
    const result = await res.json();

    bind(result.articles);
}

function bind(articles){
    const cardContainer = document.getElementById("card-container");
    const templateNewsCard = document.getElementById("template-news-card");
    
    cardContainer.innerHTML = ""
    articles.forEach(element => {
        if(!element.urlToImage)    return;
        
        const clone = templateNewsCard.content.cloneNode(true);
        loadData(element, clone)    
        cardContainer.appendChild(clone);
    
    });
}

function loadData(article, clone){
    const img = clone.querySelector("#news-img")
    const title = clone.querySelector("#news-title")
    const source = clone.querySelector("#news-source")
    const desc = clone.querySelector("#news-desc");
    
    img.src = article.urlToImage;
    title.innerHTML = article.title;
    desc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-us", {
        timeZone: "Asia/Jakarta"
    })
    
    source.innerHTML = `${article.source.name} - ${date}`


    clone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, "_blank")
    })
   
}


function onNavItemClick(id){
    fetchApi(id);
}

const searchBtn = document.querySelector("#search-btn");
const searchText = document.querySelector("#search-text");

searchBtn.addEventListener('click', function(){
    const inputQuery = searchText.value
    fetchApi(inputQuery); 
})