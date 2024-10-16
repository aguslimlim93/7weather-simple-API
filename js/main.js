// main.js

// Function to format the date string from YYYYMMDD to 'Day Month Date'
function formatDateString(dateString) {
    // Parse the date string (YYYYMMDD)
    let year = parseInt(dateString.substring(0, 4), 10);
    let month = parseInt(dateString.substring(4, 6), 10) - 1; // Months are 0-indexed
    let day = parseInt(dateString.substring(6, 8), 10);

    // Create a new Date object
    let date = new Date(year, month, day);

    // Format the date to 'Day Month Date'
    let options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to fetch and display weather data
function displayWeatherData(data) {
    let forecast = data.dataseries;
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ""; // Clear previous results

    const weatherImages = {
        'clear': 'images/clear.png',
        'cloudy': 'images/cloudy.png',
        'rain': 'images/rain.png',
        'snow': 'images/snow.png',
        'cloudline':'images/cloudline.png',
        'ishower': 'images/ishower.png' ,
        'oshower': 'images/oshower.png',
        'humid': 'images/humid.png',
        'windy': 'images/windy.png',
        'tsrain': 'images/tsrain.png',
        'tstorm': 'images/tstorm.png',
        'rainsnow': 'images/rainsnow.png',
        'lightsnow': 'images/lightsnow.png',
        'lightrain': 'images/lightrain.png',
        'fog': 'images/fog.png',
        'mcloudy': 'images/mcloudy.png',
        'pcloudy': 'images/pcloudy.png',
        // Add more mappings as needed
    };

    forecast.forEach(point => {
        let date = point.date;
        let formattedDate = formatDateString(date.toString());
        let weather = point.weather;
        let temp2mmax = point.temp2m.max;
        let temp2mmin = point.temp2m.min;

        // Create a div for each timepoint
        let weatherDiv = document.createElement('div');
        weatherDiv.classList.add('weather-point');
        weatherDiv.innerHTML = `
            <h3>${formattedDate}</h3>
        `;

        // Add an image element based on the weather condition
        let weatherImage = document.createElement('img');
        weatherImage.src = weatherImages[weather]; // Fallback to a default image
        weatherImage.alt = weather;
        weatherImage.classList.add('weather-icon'); // Optional: Add a class for styling

        // Append the image to the weatherDiv below the <h3> element
        weatherDiv.appendChild(weatherImage);

        // Add weather details below the image
        weatherDiv.innerHTML += `
            <p>${weather}</p>
            <p>H: ${temp2mmax}°C</p>
            <p>L: ${temp2mmin}°C</p>
        `;

        // Append to results div
        resultsDiv.appendChild(weatherDiv);

    });
}

// Event listener for city selection
document.getElementById('citySelected').addEventListener('change', function() {
    let city = JSON.parse(this.value);
    let lat = city.lat;
    let lon = city.lon;

    // Fetch weather data from 7Timer API
    fetch(`http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civillight&output=json`)
    .then(response => response.json())
    .then(data => {
        displayWeatherData(data);
    })
    .catch(error => console.error('Error fetching data:', error));
});

// Add this CSS for left-to-right display
const style = document.createElement('style');
style.innerHTML = `
    #results {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center; /* Centering horizontally */
    }
    .weather-point {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
        background-color: #439AEB;
        justify-content: center; 
        align-items: center;
    }
    .weather-point2 {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
        background-color: #001964;
        justify-content: center; 
        align-items: center;
    }
`;
document.head.appendChild(style);
