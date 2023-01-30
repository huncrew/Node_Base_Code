/*
APPLICATION TO RETRIEVE SOUTH AFRICAN CITIES, ASK USER FOR INPUT,
THEN RETRIEVE DATA ON THE CITY SPECIFIED, THEN RETRIEVE WEATHER DATA AND OUT PUT TO THE USER.
IN AN ASYNCRONOUS WAY.
IMPORTANT - THE API ONLY PROVIDES 5 SOUTH AFRICAN CITIES BEGINNING WITH 'A' - I THINK 
THE API HAS A FAULT.
*/
const southAfricanCities = {};
const countrUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=ZA';
const cityUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cc40989d3emsh486badc0a508902p1068c4jsn3568441c861d',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};
const weatherOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cc40989d3emsh486badc0a508902p1068c4jsn3568441c861d',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };
// Using async/functional programming to return an object of key/value pairs for african city names and IDs
const cityFetcher = async () => { 
    try {
        let htmlList = document.getElementById("city");
        let citiesRaw = await fetch(countrUrl, options);
        // await needed here as otherwise function will just run the rest of the code asycronously.
        let citiesJson = await citiesRaw.json(); 
        let citiesList = citiesJson.data;
        citiesList.forEach(element => {

        let listItem = document.createElement('option');
        listItem.innerHTML = element.city;
        listItem.id = element.city;
        htmlList.appendChild(listItem);
        
        southAfricanCities[element.city] = element.wikiDataId;

        });
    }catch (e) {
        console.error(e);
    }   return southAfricanCities;
}
//user input for city, store as code, returned.
const getUserCityInput = (cityList) => {
    let userChoice = prompt('Please enter one of these inputs South African City Inputs:', Object.keys(cityList));
    let cityCode = cityList[userChoice];
    return cityCode;
}
// retrieve city specific data using city code.
const individualCityDataFetcher = async (cityCode) => { 
    let cityUrlWithCode = cityUrl + cityCode;
    let individualCityRaw = await fetch(cityUrlWithCode, options);
    let individualCityJson = await individualCityRaw.json();
    //city details
    let population = individualCityJson.data.population;
    let elevation = individualCityJson.data.elevationMeters;
    let latitude = individualCityJson.data.latitude;
    let longitude = individualCityJson.data.longitude;
    // object of details, returned.
    let cityDetails = {
        'population': population,
        'elevation': elevation,
        'latitude': latitude,
        'longitude': longitude
    }
    return cityDetails;
}
// call weather API to get temperature.
const getWeather = async (cityData) => {
    try {
    const weatherUrl = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${cityData.longitude}&lat=${cityData.latitude}`;
    let weatherData = await fetch(weatherUrl, weatherOptions);
    let weatherDataJSON = await weatherData.json();
    cityData.temperature = weatherDataJSON.data[0].temp;
    }catch (e) {
    console.error(e);
    }
    return cityData;
}
// print response
const userResponse = async (data) => {
    console.log(`Here is the information on the city: \n The population is: ${data.population}. The temperature is: ${data.temperature}C, the elevation is: ${data.elevation} meters.`)
}

// creates a promise, with a callback that resolves once a second has passed.
const apiDelay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
  }
// starter function to manage program.
const starterFunction = async () => {
    let cityList = await cityFetcher();
    // let usersInput = await getUserCityInput(cityList);
    // await apiDelay(2000);
    // let cityData = await individualCityDataFetcher(usersInput);
    // await apiDelay(2000);
    // let weatherDetails = await getWeather(cityData);
    // userResponse(weatherDetails);
}

const getOption = () => {
    var city = document.getElementById("city");
    alert(city.selectedOptions[0].textContent);
}

// listens for elements click, calls the startcounter function
startButton.addEventListener("click", getOption);