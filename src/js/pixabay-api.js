import axios from "axios";
let perPage = 15;
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '53507836-a90b7328b368e53f321449aea';

export const getImagesByQuery = async (query, page) => {
    try{
        const response = await axios.get(BASE_URL,{ 
    params:{
       key: API_KEY,
       q: query,
       image_type: "photo",
       orientation: "horizontal",
       safesearch: true,
       per_page: perPage,
       page: page,
    }, 
    })
    return { ...response.data , perPage};
    } catch (error){
        throw error
    }
}