document.getElementById("submit-btn").addEventListener("click" , function(){
    const city = document.getElementById('inputCity').value;
    const API = '3fe77e9f119c507a86c19c3d01e75416';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
    

.then(response => response.json())
.then(data => {
    const nameValue = data.name;
    const tempValue = data.main.temp;
    const temp= fToC(tempValue);
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;
    
    

    document.getElementById('city').innerText = nameValue;
    document.getElementById('temp').innerText = tempValue + '° C';
    document.getElementById('status').innerText = weather;
    document.getElementById('weather-image').innerHTML = icon;

     const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
     const imgIcon = document.getElementById('weather-image');
     imgIcon.setAttribute('src', url);


    

    
})
.catch(error => alert("Wrong City Name"))
})

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  return fToCel;
}