
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

    displayDiv.innerHTML=`
    
       <h2>Weather for ${data.address}</h2>
                <p>Temperature: ${data.currentConditions.temp} °C</p>
                <p>Condition: ${data.currentConditions.conditions}</p>
                <p>Humidity: ${data.currentConditions.humidity}%</p>
    `
}
