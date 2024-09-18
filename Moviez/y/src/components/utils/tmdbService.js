import axios from "axios"

const BASE_URL = "https://api.themoviedb.org"
const API_KEY = "0b7942e48cf9befb7703ec2fe5626b3b"


export const fetchTrending = async ()=>{
    try {
        const response = await axios.get(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`)
        console.log(response)
    
        return response.data.results
    } catch (error) {
        console.log("error", error)
        return []
    }
}
