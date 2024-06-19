# Weather App

This project is a weather application that provides current and forecasted weather information for cities around the world.

## Credits

This project was created as part of the [freeCodeCamp](https://www.freecodecamp.org/) curriculum. Special thanks to [Slobodan Gajic](https://www.linkedin.com/in/slobodan-gajic/) for providing the tutorial and guidance on building this application.

## Notes:

I noticed that openweather API is facing some troubles with min and max temperatures , also the clouds info when showing the weather
I've made those points clear in my comments in the code , enjoy it.
Keep On Hacking!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.
- A RapidAPI key for the GeoDB Cities API.
- An OpenWeather API key.

### Installation

1. Clone the repository:
   ```sh
    git clone https://github.com/yourusername/weather-app.git
   ```

2. Install dependencies:
   ```sh
    cd react-weather-app
    npm install
   ```

3. Create an .env file in the root of your clone to add your API keys:
   ```env
    REACT_APP_GEO_API_KEY = your-rapid-key
    REACT_APP_WEATHER_API_KEY = your-weather-api-key
   ```

### Running the app

To run this app in development mode , write this line in the terminal:
   ```sh
    npm run start
   ```

### Building the app

To build this app for production , use this command line:
   ```sh
    npm run build
   ```
This will create a "build" folder with the poduciton build of the app.

### License 
This project is licensed under the MIT License.
