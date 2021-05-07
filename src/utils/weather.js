const fetch= require('node-fetch')
const date= 0

const url= "https://community-open-weather-map.p.rapidapi.com/climate/april?q=Buenos%20Aires"


fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e9068a9a65msh7cdad02c21fb4a0p127d03jsn3ad2d3239b90",
		"x-rapidapi-host": "dark-sky.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});




