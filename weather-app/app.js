
console.log("Hello world")


async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5HVQCJDUSLL5DJ7W6EXM6NFX8`)
const data = await  response.json()
console.log("data", data)  
displayData(data)
    } catch (error) {
        console.log("oh an error")
    }

}
 

document.getElementById("weatherform").addEventListener("submit", function(e){
    e.preventDefault()
    const location = document.getElementById("location").value
    getWeather(location)

})



function displayData(data){
    const displayDiv =  document.getElementById("weatherData")
    const condition = data.currentConditions.conditions.toLowerCase()

    const iconClass = getWeatherIcon(condition)


    displayDiv.innerHTML=`

       <h2>Weather for ${data.address}</h2>
       <i id="weatherIcon"  class="wi ${iconClass}"></i>
                <p>Temperature: ${data.currentConditions.temp} °C</p>
                <p>Condition: ${data.currentConditions.conditions}</p>
                <p>Humidity: ${data.currentConditions.humidity}%</p>
    `
}



function getWeatherIcon(condition){
    if (condition.includes("clear")){
        return "wi-day-sunny"
    }else if(condition.includes("cloudy")){
        return "wi-cloudy"
    }else if (condition.includes("rain")){
        return "wi-rain"
    }else if (condition.includes("snow")){
        return "wi-snow"
    }else if (condition.includes("fog")){
        return "wi-fog"
    }else{
        return "wi-na"
    }
}

