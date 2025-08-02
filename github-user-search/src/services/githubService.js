// src/services/githubService.js
import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
});

const searchGitHubUsers = async ({ username, location, repos }) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (repos) query.push(`repos:>=${repos}`);

  const q = query.join(' ');
  const response = await github.get(`/search/users?q=${encodeURIComponent(q)}`);

  const users = response.data.items;

  // Fetch full details for each user (as GitHub search API only returns partial data)
  const userDetails = await Promise.all(
    users.map(user => github.get(`/users/${user.login}`).then(res => res.data))
  );

  return userDetails;
};

export default searchGitHubUsers;
