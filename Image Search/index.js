//seach photos
// https://api.unsplash.com/search/photos/?query=dog&client_id=

const access_key = ""
const base_url = "https://api.unsplash.com/search/photos/"


const queryInput = document.getElementById("search");
const searchBtn = document.getElementById("btn");
const cardContainer = document.getElementById("card-container");
const templateCard = document.getElementById("template-card");
const showMoreBtn = document.getElementById("show-more-button");
const loader = document.getElementById("loader");

let page = 1;
searchBtn.addEventListener('click', () => {
    isPressed = true;
    searchImages(queryInput.value, page=1, isPressed);
});


async function searchImages(query, page){
    loader.style.display = "block"
    const url = base_url+"?page="+page+"&query="+query+"&client_id="+access_key
    console.log(url)
    const response = await fetch(url);
    const result = await response.json();

    if(isPressed){
        cardContainer.innerHTML = "";
        isPressed = false;
    }

    bind(result.results);
    loader.style.display = "none"
    showMoreBtn.style.display = "block";
}

async function bind(cards){
    
    // cardContainer.innerHTML = "";
    // const clone = templateCard.content.cloneNode(true);

    console.log(cards);
    
    console.log(cardContainer);
    console.log(templateCard)
    // console.log(clone);

    cards.forEach(element => {
        const clone = templateCard.content.cloneNode(true);
        load(element, clone);
        cardContainer.appendChild(clone);
    });
}

function load(cards, clone){
    const img = clone.getElementById("card-img");
    const desc = clone.getElementById("card-desc");

    img.src = cards.urls.regular;
    desc.innerText = cards.description;
}

showMoreBtn.addEventListener('click', ()=>{
    page++;
    searchImages(queryInput.value, page);
})