
console.log("Hello world")


async function getWheather() {
    try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=5HVQCJDUSLL5DJ7W6EXM6NFX8')
const data = await  response.json()
console.log("data", data)  
    } catch (error) {
        console.log("oh an error")
    }



}
getWheather()