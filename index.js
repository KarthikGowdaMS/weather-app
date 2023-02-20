const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0d31a0da38msh6896e8ea884dce7p11a806jsn558df9c53ad4',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};

const api_url = 
'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
  
function getweather(url,city) {
    
fetch(url+city,options).then((response) => response.json()).then((response)=>{

    console.log(response);
    cityname.innerHTML = city;
    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    Humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    Min_Temp.innerHTML = response.min_temp;
    Max_Temp.innerHTML = response.max_temp;
    Wind_Speed.innerHTML = response.wind_speed;
    wind_speed.innerHTML = response.wind_speed;
    Wind_Degrees.innerHTML = response.wind_degrees;
    Sunrise.innerHTML = response.sunrise;
    Sunset.innerHTML = response.sunset;

   })
}

getweather(api_url,'Bengaluru');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (city.value == '') {
    getweather(api_url,'Bengaluru');
  } else {
    getweather(api_url,city.value);
  }
});

const listweather=(city)=>{
  fetch(api_url+city,options).then((response) => response.json()).then((response)=>{
var cityName = document.getElementById(city);
for (var i=0;i<9;i++) {
  var tr = '<tr>';
var trend='</tr>'
  tr +=
    '<td>' +
    response.temp +
    '</td>'+
    '<td>' +
    response.min_temp +
    '</td>'+
    '<td>' +
    response.max_temp +
    '</td>'+
    '<td>' +
    response.humidity +
    '</td>'+
    '<td>' +
    response.cloud_pct +
    '</td>'+
    '<td>' +
    response.wind_speed +
    '</td>'+
    '<td>' +
    response.sunrise +
    '</td>'+
    '<td>' +
    response.sunset +
    '</td>'+
    trend;
}
  cityName.innerHTML += tr;
  })
}

listweather("mysore");
listweather("Mumbai");
listweather("Chennai");
listweather("London");


