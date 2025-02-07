// Get the weather button and village info elements  
const weatherBtn = document.getElementById('weather-btn');  
const villageInfo = document.getElementById('village-info');  
const weatherInfo = document.getElementById('weather-info');  
  
// Add event listener to the weather button  
weatherBtn.addEventListener('click', getWeatherData);  
  
// Function to get weather data from BMKG API  
function getWeatherData() {  
  // Set API endpoint and parameters  
  const apiUrl = 'https://api.bmkg.go.id/publik/prakiraan-cuaca';  
  const params = {  
   adm4: '35.73.01.1001' // Village code  
  };  
  
  // Create AJAX request  
  const xhr = new XMLHttpRequest();  
  xhr.open('GET', apiUrl + '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&'), true);  
  
  // Set callback function for when data is received  
  xhr.onload = function() {  
   if (xhr.status === 200) {  
    const weatherData = JSON.parse(xhr.responseText);  
    displayWeatherData(weatherData);  
   } else {  
    console.error('Error fetching weather data:', xhr.statusText);  
   }  
  };  
  
  xhr.send();  
}  
  

function displayWeatherData(weatherData) {  
 
  const weatherForecast = weatherData.forecast;  
  const currentWeather = weatherForecast.current;  
  const temperature = currentWeather.temperature;  
  const humidity = currentWeather.humidity;  
  const windSpeed = currentWeather.windSpeed;  
  
 
  weatherInfo.innerHTML = `  
   <p>Perkiraan Cuaca:</p>  
   <p>Suhu: ${temperature}°C</p>  
   <p>Kelembaban: ${humidity}%</p>  
   <p>Kecepatan Angin: ${windSpeed} m/s</p>  
  `;  
}
