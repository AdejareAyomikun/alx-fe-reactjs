// src/services/githubService.js
import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
});

const fetchUserData = async (username) => {
  const response = await github.get(`/users/${username}`);
  return response.data;
};

export default fetchUserData;
