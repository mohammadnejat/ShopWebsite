import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL ,
  params: {
    maxResults: '50'
  }, 
  headers: {
    'X-RapidAPI-Key': "9b61433fe0mshbd7a5733fe3c373p1063acjsn50f15da11cb7",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromApi = async (url) => {
 const { data } = await axios.get(`${BASE_URL}/${url}`, options);
 return data;
}