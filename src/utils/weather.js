const fetch = require("node-fetch");
const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-34.6083&lon=-58.3712&exclude=minutely,hourly,alerts&units=metric&appid=";
//API KEY
const config = require("../config");

const key = config.api.key;

const getWeather = async (date) => {
  try {
    const response = await fetch(`${url}${config.api.key}`);
    console.log("response ok");
    const processedResponse = await response.json();
	const temp= processedResponse.daily.find(element => element.dt === date).temp.day
	return temp
    console.log(processedResponse);
  } catch (e) {
    console.log(e);
  }
};

module.exports= {
	getWeather: getWeather
}
