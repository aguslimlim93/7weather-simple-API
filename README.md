Weather Forecast Application
This is a simple Weather Forecast application that fetches and displays weather data based on user-selected cities. The application uses the 7Timer API to retrieve weather forecasts and dynamically displays the information, including formatted dates and relevant weather images.

Files Overview
1. index.html
This file serves as the main HTML document for the Weather Forecast application. It includes:

HTML Structure: Contains the layout and structure of the webpage.
City Selection Dropdown: A dropdown menu that allows users to select a city for which they want to see the weather forecast.
Results Div: A container (div) where the weather data will be displayed.
JavaScript Inclusion: Includes the main.js script to handle weather data fetching and display logic.

2. main.js
This JavaScript file contains the logic for fetching and displaying weather data. Key functionalities include:

Date Formatting: Converts date strings from the API into a user-friendly format (e.g., 'Day Month Date').
Weather Data Fetching: Uses the Fetch API to retrieve weather data from the 7Timer API based on the user's selected city.
Dynamic Content Generation: Creates and populates HTML elements with weather data, including temperature highs and lows, weather conditions, and images associated with the weather.
Image Mapping: Maps weather conditions to specific image files stored in the images directory for better visual representation.
Usage
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Open index.html: Open the index.html file in a web browser.

Select a City: Use the dropdown menu to select a city and view the weather forecast.

Weather Data Display: The application will display the weather data, including the formatted date, weather conditions, temperature highs and lows, and corresponding images.

Dependencies
This application does not rely on any external libraries, but it does use the Fetch API to retrieve weather data from the 7Timer API. Ensure you have a modern web browser that supports this feature.
