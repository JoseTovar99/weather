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
        console.log(name, icon, description, temp, humidity, speed); //It should show the Place, sunny or cloudy, temperature, and wind speed
        document.querySelector(".city").innerText = "Weather in " + name; //Show the place in the website
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
    },
    search: function () {
        this.fetchWeather(document.getElementById("textEntry").value)
    }
};

document.querySelector(".inputText button").addEventListener("click", function () {
    weather.search();
})
