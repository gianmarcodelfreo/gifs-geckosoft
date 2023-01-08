import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getGifs = async (page = 1) => {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&offset=${page * 25}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchGifs = async (query) => {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
