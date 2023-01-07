import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getGifs = async (page = 1) => {
  const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&offset=${page * 25}`);

  return response.data;
};

export const searchGifs = async (query) => {
  const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`);

  return response.data;
};
