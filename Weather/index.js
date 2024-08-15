const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=&q="

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl+city);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        document.getElementById("city").innerHTML = data.name
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C"

        console.log(data);
        
    } catch (error) {
        console.error('Error:', error.message);

    }
    
}

document.getElementById("search-btn").addEventListener("click", ()=>{
    const city = document.getElementById("input").value;
    checkWeather(city)
})


