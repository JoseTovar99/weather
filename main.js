function removeText() {
    document.getElementById("textEntry").value = "";
}

let weather = {
    "apiKey": "a34de2d7ce3b57ee030f7269f4828503",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=imperial&appid=" 
             + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    //Function to display the information with different variables from the API
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { feels_like } = data.main;
        const { temp_max } = data.main;
        const { temp_min } = data.main;
        document.querySelector(".city").innerText = name; //Show the place in the website
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
        document.querySelector(".feels_like").innerText = "Feels Like: " + feels_like + "°F"
        document.querySelector(".max-temp").innerText = temp_max + "°";
        document.querySelector(".min-temp").innerText = temp_min + "°";
        //document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')"  **If I want to change background image on every new search**
    },
    search: function () {
        this.fetchWeather(document.getElementById("textEntry").value)
    }
};

document.querySelector(".inputText button").addEventListener("click", function () {
    weather.search();
})

document.getElementById("textEntry").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

let error = document.getElementById("textEntry");

error.addEventListener("keyup", function (event) {
    if (event.key === "ArrowUp") {
        console.log("working")
    }
})