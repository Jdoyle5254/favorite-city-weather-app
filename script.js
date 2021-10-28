/*
link js file to html
get access to the input filed 
get access to button 

create function to fetch api data when
button is clicked 
*/
var inputField = document.querySelector('#city'); 
var button = document.querySelector('#get-weather')

function fetchData(){
  var cityName = inputField.value; 
  var apiKey = '48c80edfe01fd8096c0b8eddb796e617'; 
  var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey

  
  console.log(requestURL)
  fetch(requestURL)
    .then(function(response){
      return response.json()
    }) 
    .then(function(weatherData){
      console.log(weatherData)
    })
}
button.addEventListener('click', fetchData)


