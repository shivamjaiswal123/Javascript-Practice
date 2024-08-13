//collection of photos
// https://api.unsplash.com/photos/?client_id=

//seach photos
// https://api.unsplash.com/search/photos/?query=dog&client_id=

const access_key = ""
const base_url = "https://api.unsplash.com/search/photos/?query="


const queryInput = document.getElementById("search");
const searchBtn = document.getElementById("btn");
const cardContainer = document.getElementById("card-container");
const templateCard = document.getElementById("template-card");
const showMoreBtn = document.getElementById("show-more-button");

searchBtn.addEventListener('click', () => {
    searchImages(queryInput.value);
});


async function searchImages(query){
    const response = await fetch("https://api.unsplash.com/search/photos/?query="+query+"&client_id="+access_key);
    const result = await response.json();

    bind(result.results);
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